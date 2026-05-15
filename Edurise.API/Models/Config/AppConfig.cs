namespace Edurise.API.Models.Config
{
    public class AppConfig
    {
        public GoogleAuth GoogleAuth { get; set; } = new GoogleAuth();
    }

    public class GoogleAuth
    {
        public string EduriseEmail { get; set; } = string.Empty;
        public string ClientEmail { get; set; } = string.Empty; 
        public string PrivateKey { get; set; } = string.Empty;  
    }
}
