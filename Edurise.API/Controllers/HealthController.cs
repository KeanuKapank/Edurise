using Edurise.API.Interfaces;
using Edurise.API.Models.Request;
using Edurise.API.Models.Response;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Edurise.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HealthController : ControllerBase
    {
        private readonly ILogger<HealthController> _logger;
        public HealthController(ILogger<HealthController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> BookConsultation(CancellationToken cancellationToken)
        {
            try
            {
                _logger.LogInformation("Health check received");

                return Ok("Healthy");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while performing health check");
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while performing health check.");
            }
        }
    }
}
