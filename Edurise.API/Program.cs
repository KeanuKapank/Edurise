using Edurise.API.Implementation;
using Edurise.API.Interfaces;
using Edurise.API.Models.Config;
using Edurise.API.Models.Request;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Auth.OAuth2.Flows;
using Google.Apis.Calendar.v3;
using Google.Apis.Calendar.v3.Data;
using Google.Apis.Services;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;
using Serilog;
using Serilog.Core;

namespace Edurise.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            using Logger log = new LoggerConfiguration().
                                 ReadFrom.Configuration(builder.Configuration)
                                .WriteTo.Console()
                                .CreateLogger();

            builder.Host.UseSerilog((context, services, configuration) =>
                configuration.ReadFrom.Configuration(context.Configuration));

            log.Information("Starting Edurise API...");

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            AppConfig appConfig = new();
            builder.Configuration.GetSection("AppConfig").Bind(appConfig);
            builder.Services.AddSingleton(appConfig);

            // Register services
            builder.Services.AddSingleton<IGoogleAuthService, GoogleAuthService>();
            builder.Services.AddSingleton<IGoogleCalendarService, GoogleCalendarService>();

            // Add CORS policy
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigin", policy =>
                {
                    policy.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
                });
            });


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwaggerUI();
                app.MapSwagger();
            }

            app.UseCors("AllowAllOrigin");

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
