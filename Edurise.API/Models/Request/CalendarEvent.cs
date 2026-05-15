namespace Edurise.API.Models.Request
{
    public record CalendarEvent(string Summary,
                                string Description,
                                string Email,
                                DateTimeOffset StartDate,
                                DateTimeOffset EndDate
                                );
}
