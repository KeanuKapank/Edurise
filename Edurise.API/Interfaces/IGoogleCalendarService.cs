using Edurise.API.Models.Request;
using Edurise.API.Models.Response;

namespace Edurise.API.Interfaces
{
    public interface IGoogleCalendarService
    {
        Task<EventsResponse> BookConsultation(CalendarEvent calendarEvent, CancellationToken cancellationToken);
    }
}
