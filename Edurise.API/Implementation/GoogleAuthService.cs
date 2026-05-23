using Edurise.API.Interfaces;
using Edurise.API.Models.Config;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Calendar.v3;
using Microsoft.Extensions.Options;
using System.Net;

namespace Edurise.API.Implementation
{
    public class GoogleAuthService : IGoogleAuthService
    {
        private readonly GoogleCredential _googleCredential;
        private readonly ILogger<GoogleAuthService> _logger;    

        public GoogleAuthService(AppConfig appConfig, ILogger<GoogleAuthService> logger)
        {
            _logger = logger;

            var privateKey = appConfig.GoogleAuth.PrivateKey
                                .Replace("\\n", "\n");

            _logger.LogInformation("Initializing GoogleAuthService with ClientEmail: {ClientEmail}", appConfig.GoogleAuth.ClientEmail);

            var credential = new ServiceAccountCredential(
                new ServiceAccountCredential.Initializer(
                    appConfig.GoogleAuth.ClientEmail)
                {
                    Scopes =
                    [
                        CalendarService.Scope.Calendar,
                        CalendarService.Scope.CalendarEvents
                    ]
                }.FromPrivateKey(
                    privateKey)
            );

            _googleCredential = GoogleCredential.FromServiceAccountCredential(credential);
        }
        public GoogleCredential GetGoogleCredential()
        {
            return _googleCredential;
        }
    }
}