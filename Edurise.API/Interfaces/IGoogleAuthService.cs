using Google.Apis.Auth.OAuth2;

namespace Edurise.API.Interfaces
{
    public interface IGoogleAuthService
    {
        GoogleCredential GetGoogleCredential();
    }
}
