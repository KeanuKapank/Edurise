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
        public GoogleAuthService(AppConfig appConfig)
        {
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
                    appConfig.GoogleAuth.PrivateKey)
            );

            _googleCredential = GoogleCredential.FromServiceAccountCredential(credential);
        }
        public GoogleCredential GetGoogleCredential()
        {
            return _googleCredential;
        }
    }
}