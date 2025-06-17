using Microsoft.AspNetCore.Identity;

namespace remake.Server.Models
{
    public class User : IdentityUser
    {
        public string? FirstName { get; set; } = string.Empty;

        public string? LastName { get; set; } = string.Empty;




    }
}
