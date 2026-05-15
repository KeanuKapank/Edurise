using Edurise.API.Interfaces;
using Edurise.API.Models.Config;
using Edurise.API.Models.Request;
using Edurise.API.Models.Response;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Auth.OAuth2.Flows;
using Google.Apis.Auth.OAuth2.Responses;
using Google.Apis.Calendar.v3;
using Google.Apis.Calendar.v3.Data;
using Google.Apis.Services;

namespace Edurise.API.Implementation
{
    public class GoogleCalendarService : IGoogleCalendarService
    {
        private readonly CalendarService _calendarService;
        private readonly AppConfig _appConfig;
        private readonly IGoogleAuthService _authService;
        private readonly ILogger<GoogleCalendarService> _logger;

        public GoogleCalendarService(AppConfig appConfig, IGoogleAuthService authService, ILogger<GoogleCalendarService> logger)
        {
            _appConfig = appConfig;
            _authService = authService;
            _logger = logger;
            _calendarService = InitializeCalenderService();
        }

        public async Task<EventsResponse> BookConsultation(CalendarEvent calendarEvent, CancellationToken cancellationToken)
        {
            string consultationId = Guid.NewGuid().ToString();  
            Event evt = new()
            {
                Summary = calendarEvent.Summary,
                Description = $"From: {calendarEvent.Email}\nDescription: {calendarEvent.Description}",
                Start = new EventDateTime
                {
                    DateTimeDateTimeOffset = calendarEvent.StartDate,
                    TimeZone = "Africa/Johannesburg"
                },
                End = new EventDateTime
                {
                    DateTimeDateTimeOffset = calendarEvent.EndDate,
                    TimeZone = "Africa/Johannesburg"
                }
            };

            EventsResource.InsertRequest insertRequest = _calendarService.Events.Insert(evt, _appConfig.GoogleAuth.EduriseEmail);

            Event response = await insertRequest.ExecuteAsync(cancellationToken);

            return new EventsResponse
            {
                IsSuccess = response != null,
                ScheduledDate = calendarEvent.StartDate
            };
        }

        private CalendarService InitializeCalenderService()
        {
            return new CalendarService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = _authService.GetGoogleCredential(),
                ApplicationName = "Edurise API"
            });
        }
    }
}
