namespace remake.Server.Entities
{
    public class AppUser
    {
        public int Id { get; set; }

        public required string UserName { get; set; }

        public string UserEmail { get; set; }
    }
}
