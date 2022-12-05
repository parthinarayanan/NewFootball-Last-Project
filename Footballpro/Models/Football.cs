using System;
using System.Collections.Generic;

namespace Footballpro.Models;

public partial class Football
{
    public int Id { get; set; }

    public string Email { get; set; } = null!;

    public string? MobileNumber { get; set; }

    public string? Password { get; set; }

    public string? PlayerName { get; set; }

    public string? Country { get; set; }

    public string? Roll { get; set; }

    public int? PlayerAge { get; set; }
}
