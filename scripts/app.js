const tangerineNovels =  [
    {
      tags : ["original","GL","contemporary","mystery"],
      author : `酒暖春深`,
      name : "My Dear Miss Forensic",
      wordCount : 5294309888,
      complete : true
    },
    {
      tags : ["original","GL","contemporary","romance"],
      author : `扶华`,
      name : "Her Mountains, Her Seas",
      wordCount : 3377921280,
      complete : true
    },
    {
      tags : ["original","GL","contemporary","mystery"],
      author : `君sola`,
      name : "Tan Xu Ling [Contemporary]",
      wordCount : 10473548800,
      complete : false
    },
    {
      tags : ["original","GL","contemporary","romance"],
      author : `璟梧`,
      name : "There's Always a Teacher Calling Parents",
      wordCount : 1858999040,
      complete : true
    },
    {
      tags : ["original","GL","historical","mystery"],
      author : `君sola`,
      name : "Tan Xu Ling",
      wordCount : 2417895936,
      complete : true
    },
    {
      tags : ["original","GL","contemporary","romance"],
      author : `素西`,
      name : "The Whole World is Waiting for You to Fall in Love",
      wordCount : 1875406336,
      complete : true
    },
    {
      tags : ["original","GL","historical","romance"],
      author : `请君莫笑`,
      name : "Female General and Eldest Princess",
      wordCount : 1563817216,
      complete : true
    },
    {
      tags : ["original","GL","contemporary","romance"],
      author : `妲婴`,
      name : "She Belongs to Me",
      wordCount : 1383089280,
      complete : true
    },
    {
      tags : ["original","GL","contemporary","romance"],
      author : `廿廿呀`,
      name : "Jewel Merchant and Miss Diamond",
      wordCount : 1919385984,
      complete : true
    },
    {
      tags : ["original","GL","contemporary","romance"],
      author : `叶涩`,
      name : "Universe's Number One Sour God",
      wordCount : 1331158272,
      complete : true
    },
    {
      tags : ["original","GL","contemporary","romance"],
      author : `热到昏厥`,
      name : "She is the Main Character",
      wordCount : 1803352704,
      complete : true
    }
]
function returnItems(){
  tangerineNovels.forEach(item => console.log(item.name)); 
  tangerineNovels.forEach(item => console.log(item.tags));
  const longNovels = tangerineNovels.filter(item => item.wordCount > 2000000000);
  console.log(longNovels);
}
returnItems();