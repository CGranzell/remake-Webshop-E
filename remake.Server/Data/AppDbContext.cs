﻿using Microsoft.EntityFrameworkCore;
using remake.Server.Models;

namespace remake.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }
    }
}
