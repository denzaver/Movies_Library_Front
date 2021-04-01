using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult GetAll()
        {
            // Retrieve all movies from db logic
            var movies = _context.Movies.ToList();

            return Ok(movies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // Retrieve movie by id from db logic
            var movie = _context.Movies.Where(m => m.MovieId == id);
            // return Ok(movie);
            return Ok(movie);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie movie)
        {
            try
            {
                _context.Movies.Add(movie);
                _context.SaveChanges();

                //return CreatedAtAction(nameof(Get)), new{ id = movie.MovieId }, movie);
                return Ok(movie);
            }
            catch (Exception err)
            {
                return BadRequest(err);
            }
            // Create movie in db logic
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            // Update movie in db logic
            try
            {
                _context.Update(movie);
                _context.SaveChanges();
                return Ok(movie);
            }
            catch (Exception err)
            {
                return BadRequest(err);
            }
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Delete movie from db logic
            try
            {
                var movie = _context.Movies.Where(s => s.MovieId == id).FirstOrDefault();
                _context.Remove(movie);
                _context.SaveChanges();
                return Ok(movie);
            }
            catch (Exception err)
            {
                return BadRequest(err);
            }
        }
    }
}