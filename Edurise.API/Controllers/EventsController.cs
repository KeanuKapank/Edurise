using Edurise.API.Interfaces;
using Edurise.API.Models.Request;
using Edurise.API.Models.Response;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Edurise.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly ILogger<EventsController> _logger;
        private readonly IGoogleCalendarService _googleCalendarService;
        public EventsController(ILogger<EventsController> logger, IGoogleCalendarService googleCalendarService)
        {
            _logger = logger;
            _googleCalendarService = googleCalendarService;
        }

        [HttpPost]
        public async Task<IActionResult> BookConsultation([FromBody] CalendarEvent calendarEvent, CancellationToken cancellationToken)
        {
            try
            {
                _logger.LogInformation("Received request to book consultation for {Email}", calendarEvent.Email);

                EventsResponse response = await _googleCalendarService.BookConsultation(calendarEvent, cancellationToken);
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while booking the consultation for {Email}", calendarEvent.Email);
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while booking the consultation.");
            }
        }
    }
}
