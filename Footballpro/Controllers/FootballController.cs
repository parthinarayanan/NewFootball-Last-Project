using Microsoft.AspNetCore.Mvc;
using Footballpro.Models;
namespace Footballpro.Controllers;

[ApiController]
[Route("api/Football")]

public class FootballController : ControllerBase
{
    private readonly FootballContext DB;
    public FootballController(FootballContext db)
    {
        this.DB = db;
    }

    [HttpGet("GetAllFootball")]
    public IQueryable<Football>GetAlEmployee()

    {
        try{
            return DB.Footballs;
        }
        catch(System.Exception)
        {
            throw;
        }
    }

     [HttpPost("InsertFoodball")]
    public object InsertFoodball(Register regobj)
    {
        try
        {
        Football e1 =new Football();
         if(e1.Id == 0)
         {
            e1.Email=regobj.Regemail;
            e1.MobileNumber=regobj.RegMobileNumber;
            e1.Password=regobj.RegPassword;
             e1.PlayerName=regobj.RegPlayerName;
             e1.Country=regobj.Regcountry;
             e1.Roll=regobj.RegRoll;
             e1.PlayerAge=regobj.RegPlayerAge;
             
            DB.Footballs.Add(e1);
            DB.SaveChanges();
            return new Responce{Status="Success",Message=" Added"};

         }

        }
        catch(System.Exception)
        {
          throw;
        }
        return new Responce{Status="Error",Message="Invalid Information"};
    }
     [HttpPost("Login")]
    public IActionResult LoginCheck(Login logobj)
    {
        var logindetail = DB.Footballs.Where(x=>x.Email.Equals(logobj.Email)&& x.Password.Equals(logobj.Password)).FirstOrDefault();
        if(logindetail == null)
        {
        return Ok(new Responce{Status="not valid",Message="Invalid Credentials !"});
        }
        else{
            return Ok(new Responce{Status="Success",Message="Welcome user !"});
        }
    }

    [HttpDelete("DeleteUserDetails/{uid}")]
    public IActionResult DeleteUser(int uid)
    {
        string message = "";
            var user = this.DB.Footballs.Find(uid);
            if (user == null)
            {
                return NotFound();
            }

            this.DB.Footballs.Remove(user);
            int result = this.DB.SaveChanges();
            if (result > 0)
            {
                message = "User has been sussfully deleted";
            }
            else
            {
                message = "failed";
            }

            return Ok(message);
        }

      
}