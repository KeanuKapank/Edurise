namespace Edurise.API.Models.Response
{
    public class EventsResponse
    {
        public bool IsSuccess { get; set; } 
        public DateTimeOffset ScheduledDate { get; set; }
    }
}
