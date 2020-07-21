using System.Collections.Generic;

namespace Smash_Combos.Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string VariableName { get; set; }
        public int YPosition { get; set; }

        public List<Combo> Combos { get; set; }
    }
}