using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using remake.Server.Data;
using remake.Server.Models;

namespace remake.Server.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UsersController(AppDbContext context) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            var users = await context.Users.ToListAsync();


            return users;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            var user = await context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpPost]
        public async Task<ActionResult<AppUser>> CreateUser(AppUser user)
        {
            context.Users.Add(user);
            await context.SaveChangesAsync();

            if (user == null)
            {
                return NotFound();
            }

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }
    }
}
