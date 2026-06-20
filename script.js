/**
 * Hello Banaras - Interactive Behavior & Data Engine
 */

// Full Database of Varanasi's 85 Ghats with Real Image Links
const GHATS_DATABASE = [
  {
    "number": 1,
    "name": "Assi Ghat",
    "patron": "",
    "description": "Assi Ghat is situated at the southern end of the city at the confluence of the Ganges and the Assi rivers. It is one of the five most sacred ghats (Panchtirthi) where pilgrims bathe before executing their rituals. It is famous for hosting 'Subah-e-Banaras' (a morning cultural and spiritual gathering featuring yoga, aarti, and classical music) and serves as a major hub for tourists, students, and spiritual seekers.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Assi_Ghat%2C_Varanasi.JPG/960px-Assi_Ghat%2C_Varanasi.JPG",
    "category": "panchtirthi"
  },
  {
    "number": 2,
    "name": "Ganga Mahal Ghat (I)",
    "patron": "",
    "description": "Constructed in 1830 by the Narayan Dynasty, the rulers of Benares, Ganga Mahal Ghat features a grand, palace-like stone structure overlooking the riverfront. It is architecturally connected to Assi Ghat and serves as a majestic example of royal Maratha-inspired construction.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Ganga_Mahal_Ghat_Assi%2C_Varanasi.JPG/960px-Ganga_Mahal_Ghat_Assi%2C_Varanasi.JPG",
    "category": "palace"
  },
  {
    "number": 3,
    "name": "Riwan Ghat",
    "patron": "",
    "description": "Riwan Ghat (Ghat #3) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Rewa_Ghat%2C_Varanasi.JPG/960px-Rewa_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 4,
    "name": "Tulsi Ghat",
    "patron": "",
    "description": "Named after the legendary poet-saint Goswami Tulsidas, who is believed to have written a significant part of the famous epic 'Ramcharitmanas' right here. The ghat houses a temple dedicated to Lord Hanuman, founded by Tulsidas himself, and the saint's samadhi site. It is also famous for hosting the traditional Lolark Mela festival.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tulasi_Ghat%2C_Varanasi.JPG/960px-Tulasi_Ghat%2C_Varanasi.JPG",
    "category": "historical"
  },
  {
    "number": 5,
    "name": "Bhadaini Ghat",
    "patron": "",
    "description": "Bhadaini Ghat (Ghat #5) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bhadaini_Ghat%2C_Varanasi.JPG/960px-Bhadaini_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 6,
    "name": "Janaki Ghat",
    "patron": "",
    "description": "Janaki Ghat (Ghat #6) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Janaki_Ghat%2C_Varanasi.JPG/960px-Janaki_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 7,
    "name": "Mata Anandamai",
    "patron": "",
    "description": "Mata Anandamai (Ghat #7) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Anandamayi%2CVaranasi.JPG/960px-Anandamayi%2CVaranasi.JPG",
    "category": "bathing"
  },
  {
    "number": 8,
    "name": "Vaccharaja Ghat",
    "patron": "",
    "description": "Vaccharaja Ghat (Ghat #8) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Vaccharaja_Ghat%2C_Varanasi.JPG/960px-Vaccharaja_Ghat%2C_Varanasi.JPG",
    "category": "palace"
  },
  {
    "number": 9,
    "name": "Jain Ghat",
    "patron": "",
    "description": "Jain Ghat is historically associated with the Jain community. It lies near the birthplace of Seventh Tirthankara, Suparshvanatha, and houses a beautiful Jain temple with vibrant colors. The ghat is utilized for bathing, spiritual retreats, and prayers.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Jain_Ghat%2C_Varanasi.JPG/960px-Jain_Ghat%2C_Varanasi.JPG",
    "category": "historical"
  },
  {
    "number": 10,
    "name": "Nishadaraja Ghat",
    "patron": "",
    "description": "Nishadaraja Ghat (Ghat #10) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Nishadraj_Ghat%2C_Varanasi.JPG/960px-Nishadraj_Ghat%2C_Varanasi.JPG",
    "category": "palace"
  },
  {
    "number": 11,
    "name": "Prabhu Ghat",
    "patron": "",
    "description": "Prabhu Ghat (Ghat #11) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Prabhu_Ghat%2C_Varanasi.JPG/960px-Prabhu_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 12,
    "name": "Panchkota Ghat",
    "patron": "",
    "description": "Panchkota Ghat (Ghat #12) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Panchakot_Ghat%2C_Varanasi.JPG/960px-Panchakot_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 13,
    "name": "Chet Singh Ghat",
    "patron": "",
    "description": "Chet Singh Ghat is a historic fortress-like ghat built by Raja Chet Singh, the ruler of Benares, in the 18th century. It was the site of an intense battle between Chet Singh and the British troops of Warren Hastings in 1781. The massive sandstone towers and bastions present an imposing, majestic appearance.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Chet_Singh_Ghat%2C_Varanasi.JPG/960px-Chet_Singh_Ghat%2C_Varanasi.JPG",
    "category": "palace"
  },
  {
    "number": 14,
    "name": "Niranjani Ghat",
    "patron": "",
    "description": "Niranjani Ghat (Ghat #14) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Niranjani_Ghat%2C_Varanasi.JPG/960px-Niranjani_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 15,
    "name": "Mahanirvani Ghat",
    "patron": "not available",
    "description": "Mahanirvani Ghat (Ghat #15) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 16,
    "name": "Shivala Ghat",
    "patron": "",
    "description": "Shivala Ghat (Ghat #16) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Shivala_Ghat%2C_Varanasi.JPG/960px-Shivala_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 17,
    "name": "Gularia Ghat",
    "patron": "",
    "description": "Gularia Ghat (Ghat #17) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Gulariya_Ghat%2C_Varanasi.JPG/960px-Gulariya_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 18,
    "name": "Dandi Ghat",
    "patron": "",
    "description": "Dandi Ghat (Ghat #18) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 19,
    "name": "Hanuman Ghat",
    "patron": "not available",
    "description": "Hanuman Ghat (Ghat #19) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 20,
    "name": "Prachina (Old) Hanuman Ghat",
    "patron": "",
    "description": "Prachina (Old) Hanuman Ghat (Ghat #20) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Prachin_Hanuman_Ghat%2C_Varanasi.JPG/960px-Prachin_Hanuman_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 21,
    "name": "Karnataka Ghat",
    "patron": "",
    "description": "Karnataka Ghat (Ghat #21) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Karnataka_Ghat%2C_Varanasi.JPG/960px-Karnataka_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 22,
    "name": "Harishchandra Ghat",
    "patron": "",
    "description": "Harishchandra Ghat is one of the two primary cremation ghats in Varanasi, named after the mythological King Harishchandra, who worked at the cremation grounds here to uphold truth and righteousness. It is believed that cremating a body here provides moksha (eternal liberation). A modern electric crematorium is also built nearby.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Harishchandra_Ghat%2C_Varanasi.JPG/960px-Harishchandra_Ghat%2C_Varanasi.JPG",
    "category": "cremation"
  },
  {
    "number": 23,
    "name": "Lali Ghat",
    "patron": "",
    "description": "Lali Ghat (Ghat #23) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Lali_Ghat%2C_Varanasi.JPG/960px-Lali_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 24,
    "name": "Vijayanagaram Ghat",
    "patron": "",
    "description": "Vijayanagaram Ghat (Ghat #24) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vijayanagaram_Ghat%2C_Varanasi.JPG/960px-Vijayanagaram_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 25,
    "name": "Kedar Ghat",
    "patron": "",
    "description": "Kedar Ghat is highly revered and features a striking red-and-white striped facade, housing the famous Kedar Eshwar Temple dedicated to Lord Shiva. It is built in the traditional South Indian architectural style and is a major bathing ghat for pilgrims from Southern India.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kedar_Ghat%2C_Varanasi.JPG/960px-Kedar_Ghat%2C_Varanasi.JPG",
    "category": "panchtirthi"
  },
  {
    "number": 26,
    "name": "Caowki (Chauki) Ghat",
    "patron": "",
    "description": "Caowki (Chauki) Ghat (Ghat #26) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Chauki_Ghat%2C_Varanasi.JPG/960px-Chauki_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 27,
    "name": "Ksemesvara / Somesvara Ghat",
    "patron": "",
    "description": "Ksemesvara / Somesvara Ghat (Ghat #27) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Kshemeshvara_Ghat%2C_Varanasi.JPG/960px-Kshemeshvara_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 28,
    "name": "Mansarovar Ghat",
    "patron": "",
    "description": "Mansarovar Ghat was constructed by Raja Man Singh of Amber (Jaipur) in 1585. It features a pool (Mansarovar Kund) and steps leading to the Ganga. It is a peaceful site used for bathing and morning meditation, reflecting Rajput architectural style.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mansarovar_Ghat%2C_Varanasi.JPG/960px-Mansarovar_Ghat%2C_Varanasi.JPG",
    "category": "palace"
  },
  {
    "number": 29,
    "name": "Narada Ghat",
    "patron": "",
    "description": "Narada Ghat (Ghat #29) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Narada_Ghat%2C_Varanasi.JPG/960px-Narada_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 30,
    "name": "Raja Ghat rebuilt by Amrut Rao Peshwa",
    "patron": "",
    "description": "Raja Ghat rebuilt by Amrut Rao Peshwa (Ghat #30) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Raja_Ghat%2C_Varanasi.JPG/960px-Raja_Ghat%2C_Varanasi.JPG",
    "category": "palace"
  },
  {
    "number": 31,
    "name": "Khori Ghat",
    "patron": "not available",
    "description": "Khori Ghat (Ghat #31) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 32,
    "name": "Pandey Ghat",
    "patron": "",
    "description": "Pandey Ghat (Ghat #32) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Pandey_Ghat%2C_Varanasi.JPG/960px-Pandey_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 33,
    "name": "Sarveshvara Ghat",
    "patron": "not available",
    "description": "Sarveshvara Ghat (Ghat #33) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 34,
    "name": "Digpatia Ghat",
    "patron": "",
    "description": "Digpatia Ghat (Ghat #34) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Diigpatiya_Ghat%2C_Varanasi.JPG/960px-Diigpatiya_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 35,
    "name": "Causatthi Ghat",
    "patron": "",
    "description": "Causatthi Ghat (Ghat #35) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chausatthi_Ghat%2C_Varanasi.JPG/960px-Chausatthi_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 36,
    "name": "Rana Mahal Ghat",
    "patron": "",
    "description": "Rana Mahal Ghat (Ghat #36) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ranamahal_Ghat%2C_Varanasi.JPG/960px-Ranamahal_Ghat%2C_Varanasi.JPG",
    "category": "palace"
  },
  {
    "number": 37,
    "name": "Darbhanga Ghat",
    "patron": "",
    "description": "Darbhanga Ghat is one of the most visually stunning and photographed ghats of Varanasi. It features a monumental fort-palace constructed by the royal family of Darbhanga (Bihar) in the early 20th century. The palace is built with massive chunks of sandstone and features majestic balconies, shrines, and traditional carvings.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Darbhanga_Ghat%2C_Varanasi.JPG/960px-Darbhanga_Ghat%2C_Varanasi.JPG",
    "category": "palace"
  },
  {
    "number": 38,
    "name": "Munshi Ghat",
    "patron": "",
    "description": "Munshi Ghat (Ghat #38) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Munshi_Ghat.JPG/960px-Munshi_Ghat.JPG",
    "category": "bathing"
  },
  {
    "number": 39,
    "name": "Ahilyabai Ghat",
    "patron": "",
    "description": "Built in the late 18th century by the legendary Maratha Queen Rani Ahilyabai Holkar of Indore. Ahilyabai Ghat is celebrated for its clean design, beautiful palace structure, and peaceful atmosphere. It was the first ghat to be named after a female ruler and is highly popular for early morning baths.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Ahilyabai_Ghat%2C_Varanasi.JPG/960px-Ahilyabai_Ghat%2C_Varanasi.JPG",
    "category": "historical"
  },
  {
    "number": 40,
    "name": "Sitala Ghat",
    "patron": "",
    "description": "Sitala Ghat (Ghat #40) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Shitala_Ghat%2C_Varanasi.JPG/960px-Shitala_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 41,
    "name": "Dashashwamedh Ghat",
    "patron": "",
    "description": "Dashashwamedh Ghat is the beating heart of Varanasi. It is the most active and famous ghat, renowned worldwide for its spectacular daily evening Ganga Aarti. According to Hindu mythology, Lord Brahma performed ten horse sacrifices (Dasa-Ashwamedha) here. It is lined with shrines, priests under bamboo umbrellas, boatmen, and a constant stream of pilgrims.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Dashashvamedh_Ghat%2C_Varanasi.JPG/960px-Dashashvamedh_Ghat%2C_Varanasi.JPG",
    "category": "panchtirthi"
  },
  {
    "number": 42,
    "name": "Prayag Ghat",
    "patron": "not available",
    "description": "Prayag Ghat (Ghat #42) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 43,
    "name": "Rajendra Prasad Ghat",
    "patron": ".",
    "description": "Rajendra Prasad Ghat is named after India's first President, Dr. Rajendra Prasad. It was renamed in his honor in 1979 and features a large, spacious platform used for cultural programs, national events, and daily spiritual gatherings.",
    "image": "",
    "category": "historical"
  },
  {
    "number": 44,
    "name": "Man Mandir Ghat",
    "patron": "",
    "description": "Man Mandir Ghat is famous for the grand observatory (Jantar Mantar) built on its roof by Raja Sawai Jai Singh II of Jaipur in 1710. The palace itself, overlooking the Ganges, was built by Raja Man Singh of Amber. The observatory features ancient astronomical instruments made of stone.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Man_Mandir_Ghat%2C_Varanasi.JPG/960px-Man_Mandir_Ghat%2C_Varanasi.JPG",
    "category": "palace"
  },
  {
    "number": 45,
    "name": "Tripura Bhairavi Ghat",
    "patron": "",
    "description": "Tripura Bhairavi Ghat (Ghat #45) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Tripurabhairavi_Ghat%2C_Varanasi.JPG/960px-Tripurabhairavi_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 46,
    "name": "Mira (Meer) Ghat",
    "patron": "",
    "description": "Mira (Meer) Ghat (Ghat #46) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Meer_Ghat_2.JPG/960px-Meer_Ghat_2.JPG",
    "category": "bathing"
  },
  {
    "number": 47,
    "name": "Yajneshvara / Naya Ghat",
    "patron": "old site of Yajnesvara Ghat",
    "description": "Yajneshvara / Naya Ghat (Ghat #47) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing under the patronage of old site of Yajnesvara Ghat. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 48,
    "name": "Nepali Ghat",
    "patron": "not available",
    "description": "Nepali Ghat (Ghat #48) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 49,
    "name": "Lalita Ghat",
    "patron": "",
    "description": "Lalita Ghat is dedicated to the goddess Lalita Tripura Sundari. It houses the famous Nepali Temple (built of wood in Kathmandu style, with exquisite wood carvings) and the Lalita Gauri Temple. It is considered highly sacred for females.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lalita_Ghat%2C_Varanasi.JPG/960px-Lalita_Ghat%2C_Varanasi.JPG",
    "category": "historical"
  },
  {
    "number": 50,
    "name": "Bauli/ Umaraogiri/ Amroha Ghat",
    "patron": "not available",
    "description": "Bauli/ Umaraogiri/ Amroha Ghat (Ghat #50) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 51,
    "name": "Jalasen (Jalasayi) Ghat",
    "patron": "",
    "description": "Jalasen (Jalasayi) Ghat (Ghat #51) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Jalasen_Ghat%2C_Varanasi.JPG/960px-Jalasen_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 52,
    "name": "Kshiriki Ghat",
    "patron": "not available",
    "description": "Kshiriki Ghat (Ghat #52) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 53,
    "name": "Manikarnika Ghat",
    "patron": "",
    "description": "Manikarnika Ghat is the primary and holiest cremation ground in Varanasi. It is believed that Lord Shiva whispers the Taraka Mantra in the ears of those cremated here, granting immediate moksha (liberation). The funeral pyres burn continuously 24/7. It houses the sacred Manikarnika Kund, a well believed to have been dug by Lord Vishnu, containing Shiva's earring.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Manikarnika_Ghat%2C_Varanas.JPG/960px-Manikarnika_Ghat%2C_Varanas.JPG",
    "category": "panchtirthi"
  },
  {
    "number": 54,
    "name": "Bajirao Ghat",
    "patron": "not available",
    "description": "Bajirao Ghat (Ghat #54) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 55,
    "name": "Scindia Ghat",
    "patron": "",
    "description": "Scindia Ghat is famous for its partially submerged Shiva temple (Ratneshwar Mahadev Temple), which has tilted significantly under the weight of the masonry. It is a quiet and highly spiritual ghat, named after the Scindia dynasty of Gwalior who renovated it in 1835.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Scindia_Ghat%2C_Varanasi.JPG/960px-Scindia_Ghat%2C_Varanasi.JPG",
    "category": "historical"
  },
  {
    "number": 56,
    "name": "Sankatha Ghat",
    "patron": "",
    "description": "Sankatha Ghat (Ghat #56) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sanktha_Ghat%2C_Varanasi.JPG/960px-Sanktha_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 57,
    "name": "Ganga Mahal Ghat (II)",
    "patron": "",
    "description": "Ganga Mahal Ghat (II) (Ghat #57) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Benares-_Temple_on_Ganges_in_state_of_collapse%2C_India%2C_ca._1906_%28IMP-CSCNWW33-OS14-59%29.jpg/960px-Benares-_Temple_on_Ganges_in_state_of_collapse%2C_India%2C_ca._1906_%28IMP-CSCNWW33-OS14-59%29.jpg",
    "category": "palace"
  },
  {
    "number": 58,
    "name": "Bhonsale Ghat",
    "patron": "",
    "description": "Bhonsale Ghat (Ghat #58) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bhonsale_Ghat_%2813535658844%29.jpg/960px-Bhonsale_Ghat_%2813535658844%29.jpg",
    "category": "bathing"
  },
  {
    "number": 59,
    "name": "Naya Ghat",
    "patron": "In Prinsep's map of 1822, this was named as Gularia Ghat",
    "description": "Naya Ghat (Ghat #59) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing under the patronage of In Prinsep's map of 1822, this was named as Gularia Ghat. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 60,
    "name": "Genesa/ Agnishvara Ghat",
    "patron": "",
    "description": "Genesa/ Agnishvara Ghat (Ghat #60) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 61,
    "name": "Mehta Ghat",
    "patron": "Formally this was part of the preceding ghat, but after the construction of V.S.Mehta hospital (1962), this is known to the name of latter one.",
    "description": "Mehta Ghat (Ghat #61) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing under the patronage of Formally this was part of the preceding ghat, but after the construction of V.S.Mehta hospital (1962), this is known to the name of latter one.. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 62,
    "name": "Rama Ghat",
    "patron": "",
    "description": "Rama Ghat (Ghat #62) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Ram_Ghat%2C_Varanasi.JPG/960px-Ram_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 63,
    "name": "Jatara Ghat",
    "patron": "",
    "description": "Jatara Ghat (Ghat #63) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Jatar_Ghat%2C_Varanasi.JPG/960px-Jatar_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 64,
    "name": "Raja Gwalior Ghat",
    "patron": "",
    "description": "Raja Gwalior Ghat (Ghat #64) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Raja_Gwalior_Ghat%2C_Varanasi.JPG/960px-Raja_Gwalior_Ghat%2C_Varanasi.JPG",
    "category": "palace"
  },
  {
    "number": 65,
    "name": "Mangala Gauri Ghat (also known as Bala Ghat)",
    "patron": "",
    "description": "Mangala Gauri Ghat (also known as Bala Ghat) (Ghat #65) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Balaji_Ghat%2C_Varanasi.JPG/960px-Balaji_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 66,
    "name": "Venimadhava Ghat",
    "patron": "part of the Pancaganga Ghat and also known as Vindu Madhava Ghat",
    "description": "Venimadhava Ghat (Ghat #66) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing under the patronage of part of the Pancaganga Ghat and also known as Vindu Madhava Ghat. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 67,
    "name": "Panchaganga Ghat",
    "patron": "",
    "description": "Panchganga Ghat is considered the confluence of five sacred rivers: the Ganga, Yamuna, Sarasvati, Kirana, and Dhutapapa (with only the Ganga visible). It is the site of the historic Alamgir Mosque (built by Emperor Aurangzeb on the ruins of the Bindu Madhav Temple) and is famous for the Kartik festival of lights, when thousands of clay lamps are suspended in bamboo baskets.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/PanchaGanga_Ghat%2C_Varanasi_%282%29.JPG/960px-PanchaGanga_Ghat%2C_Varanasi_%282%29.JPG",
    "category": "panchtirthi"
  },
  {
    "number": 68,
    "name": "Durga Ghat",
    "patron": "",
    "description": "Durga Ghat (Ghat #68) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Durga_Ghat%2C_Varanasi.JPG/960px-Durga_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 69,
    "name": "Brahma Ghat",
    "patron": "",
    "description": "Brahma Ghat (Ghat #69) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Brahma_Ghat%2C_Varanasi.JPG/960px-Brahma_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 70,
    "name": "Bundi Parakota Ghat",
    "patron": "",
    "description": "Bundi Parakota Ghat (Ghat #70) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Bundi_Parkota_Ghat%2C_Varanasi.JPG/960px-Bundi_Parkota_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 71,
    "name": "(Adi)Shitala Ghat",
    "patron": "This is an extended part of the preceding ghat",
    "description": "(Adi)Shitala Ghat (Ghat #71) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing under the patronage of This is an extended part of the preceding ghat. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 72,
    "name": "Lal Ghat",
    "patron": "",
    "description": "Lal Ghat (Ghat #72) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Lal_Ghat%2C_Varanasi.JPG/960px-Lal_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 73,
    "name": "Hanumanagardh Ghat",
    "patron": "",
    "description": "Hanumanagardh Ghat (Ghat #73) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Hanumangarhi_Ghat%2C_Varanasi.JPG/960px-Hanumangarhi_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 74,
    "name": "Gaya/Gai Ghat",
    "patron": "",
    "description": "Gaya/Gai Ghat (Ghat #74) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Gai_Ghat%2C_Varanasi.JPG/960px-Gai_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 75,
    "name": "Badri Nayarana Ghat",
    "patron": "",
    "description": "Badri Nayarana Ghat (Ghat #75) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Badrinarayan_Ghat%2C_Varanasi.JPG/960px-Badrinarayan_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 76,
    "name": "Trilochan Ghat",
    "patron": "",
    "description": "Trilochan Ghat (Ghat #76) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Trilochan_Ghat%2C_Varanasi.JPG/960px-Trilochan_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 77,
    "name": "Gola Ghat",
    "patron": "Since the late 12th cent. this site was used as ferry point and was also known for several granaries (gold)",
    "description": "Gola Ghat (Ghat #77) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing under the patronage of Since the late 12th cent. this site was used as ferry point and was also known for several granaries (gold). It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 78,
    "name": "Nandesvara /Nandu Ghat",
    "patron": "",
    "description": "Nandesvara /Nandu Ghat (Ghat #78) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Nandesvara_Ghat%2C_Varanasi.JPG/960px-Nandesvara_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 79,
    "name": "Sakka Ghat",
    "patron": "",
    "description": "Sakka Ghat (Ghat #79) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sakka_Ghat%2C_Varanasi.JPG/960px-Sakka_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 80,
    "name": "Telia Nala Ghat",
    "patron": "",
    "description": "Telia Nala Ghat (Ghat #80) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Telianala_Ghat%2C_Varanasi.JPG/960px-Telianala_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 81,
    "name": "Naya/Phuta Ghat",
    "patron": "During the 18th century the ghat – area became deserted (Phuta), but later on it was renovated. This way the ghat was formerly known as phuta, and later as Naya.",
    "description": "Naya/Phuta Ghat (Ghat #81) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing under the patronage of During the 18th century the ghat – area became deserted (Phuta), but later on it was renovated. This way the ghat was formerly known as phuta, and later as Naya.. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "bathing"
  },
  {
    "number": 82,
    "name": "Prahalada Ghat",
    "patron": "",
    "description": "Prahalada Ghat (Ghat #82) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Prahlad_Ghat%2C_Varanasi.JPG/960px-Prahlad_Ghat%2C_Varanasi.JPG",
    "category": "bathing"
  },
  {
    "number": 83,
    "name": "Raja Ghat (Bhaisasur Rajghat) / Lord Dufferin bridge / Malaviya Bridge",
    "patron": "",
    "description": "Raja Ghat (Bhaisasur Rajghat) / Lord Dufferin bridge / Malaviya Bridge (Ghat #83) is a holy site along the Ganges riverfront in Varanasi. It has been historically used by pilgrims for bathing, morning prayers, and spiritual cleansing. It forms an essential link in the sacred chain of 84 ghats that define the spiritual heritage of Kashi.",
    "image": "",
    "category": "palace"
  },
  {
    "number": 84,
    "name": "Adi Keshava Ghat",
    "patron": "",
    "description": "Adi Keshava Ghat marks the northern boundary of the sacred city of Kashi. It is situated at the confluence of the Varuna and Ganges rivers. The ghat houses the Adi Keshava Temple dedicated to Lord Vishnu and is considered one of the oldest and most spiritually critical points in the pilgrimage mandala.",
    "image": "",
    "category": "panchtirthi"
  },
  {
    "number": 89,
    "name": "Na Mo Ghat",
    "patron": "A recent construction, named after the nickname of the Indian Prime minister Narendra Modi (NaMo).",
    "description": "Namo Ghat (originally Khidkiya Ghat) is a modern addition to Varanasi's riverfront. It is famous for its three massive sculptures of folded hands in a gesture of 'Namaste' (salutation). It features modern pathways, a floating CNG station, food courts, and an open-air theater, representing the modern development of Benares.",
    "image": "",
    "category": "historical"
  }
];

// Key Landmark Nodes for the Pilgrimage Map
const PATH_NODES = [
  { number: 1, name: "Assi Ghat", label: "Assi" },
  { number: 13, name: "Chet Singh Ghat", label: "Chet Singh" },
  { number: 25, name: "Kedar Ghat", label: "Kedar" },
  { number: 41, name: "Dashashwamedh Ghat", label: "Dashashwamedh" },
  { number: 53, name: "Manikarnika Ghat", label: "Manikarnika" },
  { number: 67, name: "Panchaganga Ghat", label: "Panchganga" },
  { number: 82, name: "Prahalada Ghat", label: "Prahlad" },
  { number: 84, name: "Adi Keshava Ghat", label: "Adi Keshava" }
];

// Curated Pool of Real, High-Quality Unsplash Photos of Varanasi (for Fallback use)
const GHAT_PHOTOS = [
  "https://images.unsplash.com/photo-1561361531-79f904a10931?auto=format&fit=crop&w=800&q=80", // Sunrise boats
  "https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&w=800&q=80", // Ghat stone steps
  "https://images.unsplash.com/photo-1608958416738-4c74070a7d0d?auto=format&fit=crop&w=800&q=80", // Ganga Aarti lights
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80", // Sadhu in prayer
  "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80", // Colorful rowboats
  "https://images.unsplash.com/photo-1598977123418-45f588a6140a?auto=format&fit=crop&w=800&q=80", // Sandstone ghat architecture
  "https://images.unsplash.com/photo-1570168007244-23704157e8ce?auto=format&fit=crop&w=800&q=80", // Bathing pilgrims
  "https://images.unsplash.com/photo-1612436458514-c8c3e803fbdf?auto=format&fit=crop&w=800&q=80", // Twilight temple lights
  "https://images.unsplash.com/photo-1627894483216-2138af692e2e?auto=format&fit=crop&w=800&q=80", // Ganga river expanse
  "https://images.unsplash.com/photo-1601919051950-bb9f3fe4eddf?auto=format&fit=crop&w=800&q=80", // Saffron flags and steps
  "https://images.unsplash.com/photo-1506450981913-b21447d72648?auto=format&fit=crop&w=800&q=80", // Ancient architecture detail
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"  // Morning golden light
];

// Crafts and Specialities Database
const CRAFTS_DATABASE = {
  silk: {
    title: "Banarasi Brocade Silk",
    tag: "GI Tagged Heritage",
    category: "Luxury Silk Weaving",
    hubs: "Madanpura, Peeli Kothi, Lallapura",
    time: "15 to 180 Days",
    image: "images/banarasi_silk.png",
    description: "Banarasi silk sarees are among the finest sarees in India and are known for their gold and silver brocade or zari, fine silk, and opulent embroidery. The sarees are made of finely woven silk and decorated with intricate designs, representing centuries of royal heritage. Hand-woven on traditional wooden throw-shuttle looms, a single saree can take anywhere from two weeks to six months of meticulous work by two or three artisans.",
    process: [
      { step: 1, title: "Naksha Banani (Design Drafting)", desc: "The master craftsman drafts the pattern on graph paper (naksha), which is then translated into perforated wooden jacquard cards that guide the loom." },
      { step: 2, title: "Tana-Bana (Loom Setup)", desc: "The warp (tana) silk threads are stretched across the handloom frame, while the weft (bana) gold/silver zari threads are wound onto shuttles." },
      { step: 3, title: "Kargha Bunai (Weaving)", desc: "Weavers manually operate the wooden shuttle pedals, meticulously interlacing silk and zari threads to construct complex brocade patterns." }
    ],
    support: [
      { label: "Chowk Silk Cooperative Shop", val: "Chowk Bazar, Near Vishwanath Gali" },
      { label: "UP State Handloom Emporium", val: "Lahurabir Main Road, Varanasi" },
      { label: "Urban Haat Handicraft Center", val: "Sanskritik Sankul, Chowkaghat" }
    ]
  },
  meenakari: {
    title: "Gulabi Meenakari",
    tag: "Artisan Craft",
    category: "Metal Enamelling Art",
    hubs: "Gai Ghat, Ramnagar, Chowk",
    time: "3 to 10 Days",
    image: "images/gulabi_meenakari.png",
    description: "Gulabi Meenakari is a rare craft of enamelling on gold or silver, unique to Varanasi. Introduced by Persian craftsmen in the early 17th century, the art involves engraving intricate designs on metal plates and filling them with crushed mineral colors. It is characterized by the use of pink (gulabi) color on a white enamel base.",
    process: [
      { step: 1, title: "Chitai (Engraving)", desc: "The goldsmith (Chitaras) shapes the silver or gold metal plate and engraves depressions for design motifs." },
      { step: 2, title: "Meena Bharna (Enamel Inlaying)", desc: "Ground mineral oxides (mixed with water) are applied inside the engraved patterns using fine needles." },
      { step: 3, title: "Kiln Firing & Buffing", desc: "The ornament is fired in a kiln at high temperatures, melting the minerals. Finally, it is rubbed with lemon juice and polished to reveal the radiant pink accents." }
    ],
    support: [
      { label: "Gai Ghat Enamel Workshops", val: "Gai Ghat Heritage Area, Varanasi" },
      { label: "Government Handicrafts Outlet", val: "Fort Road, Ramnagar" },
      { label: "Varanasi GI Craft Museum Shop", val: "Trade Facilitation Center, Bada Lalpur" }
    ]
  },
  wooden_toys: {
    title: "Wooden Lacquerware & Toys",
    tag: "GI Tagged Craft",
    category: "Wood Carving & Lacquer",
    hubs: "Khojwan, Kashmiri Kothi",
    time: "2 to 5 Days",
    image: "images/wooden_toys.png",
    description: "Varanasi's wooden lacquerware and toys are a traditional craft dating back several centuries. Made primarily by the local 'Kharaudi' community using soft, fine-grained wood from local trees, each toy is shaped on a lathe and finished with natural lacquer resins and mineral pigments, making them organic and safe.",
    process: [
      { step: 1, title: "Kharaad (Lathe Carving)", desc: "Seasoned Koriya wood blocks are mounted on a lathe and hand-turned with chisels to carve the toy shapes." },
      { step: 2, title: "Natural Lacquering", desc: "Hard sticks of natural shellac mixed with organic dyes are pressed against the spinning wood, melting from friction heat to coat it." },
      { step: 3, title: "Oil Buffing", desc: "The lacquered toy is polished with dry leaves or cotton cloth dipped in mustard oil to give it an everlasting glossy shine." }
    ],
    support: [
      { label: "Khojwan Toy Artisan Market", val: "Khojwan Crossing, Varanasi" },
      { label: "Benares Handicrafts Society Outlet", val: "Near Cantt Railway Station" },
      { label: "State Co-operative Haat", val: "Chowkaghat Main Complex" }
    ]
  },
  paan: {
    title: "Legendary Banarasi Paan",
    tag: "Heritage Taste",
    category: "Betel Leaf Culinary Art",
    hubs: "Tambul Bhandar, Nadesar",
    time: "1 to 2 Minutes",
    image: "images/banarasi_paan.png",
    description: "Made famous by Indian folklore and Bollywood songs, the Banarasi Paan is more than just a betel leaf preparation—it is a symbol of hospitality, royal lineage, and a sensory experience. It uses high-quality betel leaves which are cured and processed to become incredibly soft, dissolving in the mouth.",
    process: [
      { step: 1, title: "Paan Patra Shodhan (Leaf Curing)", desc: "The Magahi or Jagannathi betel leaves are cleaned, soaked, and slowly cured inside damp cloth piles to soften their texture." },
      { step: 2, title: "Katha-Chuna Application", desc: "The soft leaf is coated with a thin paste of liquid lime (chuna) and red Acacia catechu extract (katha)." },
      { step: 3, title: "Khas Masala (Spicing)", desc: "A curated blend of sweet gulkand (rose petals), grated coconut, fennel, cardamom, and silver foil (varq) is folded inside." }
    ],
    support: [
      { label: "Keshav Tambul", val: "Lanka Crossing, Near BHU Gate" },
      { label: "Ramchandra Chaurasia Paan", val: "Chowk Main Intersection" },
      { label: "Nadesar Palace Paan Stall", val: "Nadesar Heritage Area, Cantonment" }
    ]
  },
  stone_carving: {
    title: "Chunar Stone Carving",
    tag: "Ancient Art",
    category: "Sandstone Sculpture",
    hubs: "Chunar Hills, Kaithi",
    time: "7 to 60 Days",
    image: "images/chunar_stone_carving.png",
    description: "Chunar stone carving is one of the oldest architectural crafts in India, utilizing the famous fine-grained reddish-buff sandstone quarried from the nearby Chunar hills. The legacy of this craft dates back to the Mauryan Empire (3rd Century BCE)—the iconic Ashoka Pillars were carved from Chunar sandstone.",
    process: [
      { step: 1, title: "Rekhankan (Marking)", desc: "The silhouette of the sculpture or trellis pattern is drawn directly onto raw buff sandstone blocks." },
      { step: 2, title: "Chitai (Chiselling)", desc: "Artisans chisel out the excess stone using iron mallet hammers and fine steel chisels to create deep relief structures." },
      { step: 3, title: "Jaali Jharai (Finishing)", desc: "Detailed latticework voids are cut out, and the stone surface is polished with abrasive blocks for a smooth, matte finish." }
    ],
    support: [
      { label: "Ashapur Stone Sculptors Guild", val: "Sarnath Road, Near Sarnath Stupa" },
      { label: "Chunar Sandstone Crafts Union", val: "Chunar Fort Area, Chunar" },
      { label: "Sarnath Souvenir Emporium", val: "Archeological Museum Market" }
    ]
  },
  thandai: {
    title: "Banarasi Thandai & Sweets",
    tag: "Sacred Elixir",
    category: "Culinary Beverages",
    hubs: "Godowlia Crossing, Chowk",
    time: "15 to 30 Minutes",
    image: "images/banarasi_thandai.png",
    description: "Banarasi Thandai is a refreshing, traditional milk beverage closely tied to the worship of Lord Shiva. It is prepared by blending boiled milk with a rich paste of almonds, pistachios, fennel, black pepper, and fresh rose petals, frequently offered as a holy offering (Prasad) during festivals.",
    process: [
      { step: 1, title: "Bhang-Masala Ghutai (Grinding)", desc: "Almonds, pistachios, fennel, black pepper, and cardamom are crushed into a fine paste on a traditional flat stone plate." },
      { step: 2, title: "Dugdh Mishran (Milk Blend)", desc: "The herb paste is stirred into sweet, thick, pre-boiled milk that has been chilled with ice." },
      { step: 3, title: "Kulhad Sajavat (Garnish)", desc: "The cold beverage is strained through muslin cloth, poured into clay kulhads, and garnished with saffron strands and dry rose petals." }
    ],
    support: [
      { label: "Badal Thandai House", val: "Godowlia Crossing, Varanasi" },
      { label: "Blue Lassi Shop", val: "Kachori Gali, Near Manikarnika" },
      { label: "Baba Thandai", val: "Lahurabir Crossing, Varanasi" }
    ]
  }
};

// Tourism Themes Database (Data sourced in reference to kashi.gov.in)
const THEMES_DATABASE = {
  spirituality: {
    title: "Spirituality & Sacred Rituals",
    icon: "fa-om",
    color: "var(--accent-saffron)",
    desc: "Varanasi is the spiritual heartbeat of India. Pilgrims travel from all corners of the earth to bathe in the holy Ganges, seek moksha (liberation), and experience the daily rhythm of bells, chants, and brass lamps that has remained unchanged for thousands of years.",
    attractions: [
      "Kashi Vishwanath Temple",
      "Dashashwamedh Evening Aarti",
      "Panchtirthi Holy Pilgrimage Path"
    ],
    experiences: [
      "Watch sunrise & Subah-e-Banaras at Assi Ghat",
      "Early morning boat ride to witness bathing rituals"
    ],
    actions: [
      { text: "Visit Shrines", link: "#temples", icon: "fa-arrow-right", secondary: false },
      { text: "Explore Ghats", link: "#ghats", icon: "fa-water", secondary: true }
    ]
  },
  music: {
    title: "Classical Music & Arts",
    icon: "fa-music",
    color: "var(--accent-blue)",
    desc: "As a UNESCO Creative City of Music, Varanasi is the birthplace of the famous Banaras Gharana and has nurtured legendary virtuosos. From the soulful morning notes of shehnai of Ustad Bismillah Khan to the magical sitar strings of Pandit Ravi Shankar, Kashi echoes with artistic devotion.",
    attractions: [
      "Kabir Chaura Musicians' Neighborhood",
      "Sankat Mochan Sangeet Samaroh (Annual Festival)",
      "Benares Gharana Music Academies"
    ],
    experiences: [
      "Listen to morning ragas at Subah-e-Banaras at Assi Ghat",
      "Visit heritage ashrams where shehnai and sitar masters practiced"
    ],
    actions: [
      { text: "Explore Heritage", link: "#culture", icon: "fa-arrow-right", secondary: false },
      { text: "Visit Shrines", link: "#temples", icon: "fa-place-of-worship", secondary: true }
    ]
  },
  heritage: {
    title: "Heritage & Learning",
    icon: "fa-book-open-reader",
    color: "var(--accent-gold)",
    desc: "Varanasi is a centuries-old sanctuary of knowledge, philosophy, and historical milestones. From Sarnath, where Gautama Buddha turned the Wheel of Dharma, to the massive educational legacy of Banaras Hindu University (BHU), Kashi is the eternal seat of wisdom.",
    attractions: [
      "Sarnath Archeological Excavations & Museum",
      "Banaras Hindu University (BHU) Campus",
      "Bharat Kala Bhavan (Art & Craft Museum)",
      "Ramnagar Fort & Palace Museum"
    ],
    experiences: [
      "Stand before the ancient 43-meter Dhamek Stupa at Sarnath",
      "Explore the royal Maratha collections inside Ramnagar Fort"
    ],
    actions: [
      { text: "Visit Shrines", link: "#temples", icon: "fa-arrow-right", secondary: false },
      { text: "Explore Ghats", link: "#ghats", icon: "fa-water", secondary: true }
    ]
  },
  crafts: {
    title: "Handlooms & Crafts",
    icon: "fa-scissors",
    color: "var(--accent-saffron)",
    desc: "The visual heritage of Banaras is preserved in the magical hands of its traditional artisan guilds. Witness the intricate brocade silk sarees woven on old wooden looms, the shimmering pink enamels of Gulabi Meenakari, and the natural lacquerware toys.",
    attractions: [
      "Madanpura & Peeli Kothi Silk Weaving Hubs",
      "Khojwan Toy Artisan Markets",
      "Gai Ghat Meenakari Workshops"
    ],
    experiences: [
      "Watch a master weaver create Banarasi brocade on a handloom",
      "Support local artisans by purchasing GI-tagged handicrafts"
    ],
    actions: [
      { text: "View Crafts", link: "#gallery", icon: "fa-arrow-right", secondary: false }
    ]
  },
  gastronomy: {
    title: "Culinary & Flavors",
    icon: "fa-utensils",
    color: "var(--accent-gold)",
    desc: "The street food culture of Varanasi is legendary. Savor the delicate preparations of Banarasi Thandai chilled in clay pots, the spicy street Kachori-Sabzi, the seasonal sweet Malaiyo that melts like dew, and the GI-tagged Banarasi Paan that seals the culinary experience.",
    attractions: [
      "Godowlia & Chowk Kachori Lanes",
      "Tambul Bhandar (Local Paan Stalls)",
      "Blue Lassi & Badal Thandai Houses"
    ],
    experiences: [
      "Drink saffron-garlanded Thandai from a traditional clay kulhad",
      "Enjoy the sweet folding of a legendary Banarasi Magahi Paan"
    ],
    actions: [
      { text: "Explore Taste", link: "#gallery", icon: "fa-arrow-right", secondary: false }
    ]
  }
};

// Transit & Connectivity Database
const TRANSIT_DATABASE = {
  airport: {
    tag: "AIRPORT CONNECTIONS",
    title: "Lal Bahadur Shastri International Airport (VNS)",
    dist: "~ 24 km (Northwest)",
    route: "NH31 (4-Lane Airport Expressway)",
    desc: "LBS International Airport connects Varanasi to major domestic and international hubs. The NH31 Expressway links it directly to the city center, enabling rapid travel to the ghats in under 45 minutes.",
    features: [
      "NH31 Expressway connects to city center in 40 minutes",
      "Regular direct daily flights by Air India, IndiGo, and Vistara",
      "Fully integrated international customs and cargo facilities"
    ]
  },
  station_bsb: {
    tag: "RAILWAY TERMINAL",
    title: "Varanasi Junction / Cantt Station (BSB)",
    dist: "~ 3.5 km (West of Ghats)",
    route: "Vidyapeeth Road / City Arteries",
    desc: "Commonly known as Cantt Station, BSB is the central and busiest railway terminal in Kashi. It operates high-speed trains (like Vande Bharat) connecting the city to all tier-1 cities in India.",
    features: [
      "Primary hub for Vande Bharat, Rajdhani, and Superfast trains",
      "Equipped with modern executive lounges and escalators",
      "Direct transit links (auto-rickshaws, city buses) to all ghats"
    ]
  },
  station_bsbs: {
    tag: "RAILWAY TERMINAL",
    title: "Banaras Railway Station (BSBS)",
    dist: "~ 4 km (Southwest of Ghats)",
    route: "Lanka-Manduadih Road",
    desc: "A modern terminal built in traditional sandstone architecture inspired by Kashi's ghats. It is a clean, peaceful terminal operating major express routes to New Delhi, Lucknow, and Mumbai.",
    features: [
      "Awarded 'Gold' rating for cleanliness and passenger amenities",
      "Features traditional stone carvings, fountains, and dynamic lighting",
      "Highly convenient for visitors staying near Assi Ghat or BHU"
    ]
  },
  station_kei: {
    tag: "RAILWAY JUNCTION",
    title: "Kashi Railway Station (KEI)",
    dist: "~ 5.5 km (Northeast of Ghats)",
    route: "Rajghat Bridge Corridor",
    desc: "Located near the historic Malviya Bridge, Kashi Station is one of the oldest stops in Kashi. It is undergoing a mega redevelopment to transform it into a major modern gateway for eastern Varanasi.",
    features: [
      "Sits near the sacred confluence of Varuna and Ganges",
      "Directly connected to the Rajghat Malviya Bridge rail-cum-road link",
      "Undergoing major redevelopment for passenger capacities"
    ]
  },
  station_ddu: {
    tag: "MEGA RAILWAY HUB",
    title: "Pt. Deen Dayal Upadhyaya Junction (DDU)",
    dist: "~ 15 km (East across Ganges)",
    route: "NH19 (GQ Highway Bypass)",
    desc: "Historically Mughalsarai, DDU is one of the busiest junctions in India. Sitting on the Howrah-Delhi line, it contains Asia's largest railway marshalling yard, handling heavy trunk traffic bypasses.",
    features: [
      "Largest railway yard in Asia, serving the main East-Central line",
      "Connected to Varanasi city via NH19 and the Ramnagar Bridge",
      "Essential station for long-distance trains from Kolkata, Patna, and Delhi"
    ]
  },
  nh31: {
    tag: "NATIONAL HIGHWAY",
    title: "National Highway 31 (Airport Road)",
    dist: "VNS Airport to Varanasi Center",
    route: "NH31 (Airport Expressway)",
    desc: "A 4-lane high-speed expressway link connecting Varanasi center directly to the LBS International Airport. Features modern flyovers that bypass local gridlocks for fast transit.",
    features: [
      "4-lane high-speed expressway section with dynamic lighting",
      "Flyovers bypassing local bottlenecks (Harahua, Shivpur)",
      "Direct connectivity to the Varanasi Ring Road bypass"
    ]
  },
  nh19: {
    tag: "NATIONAL HIGHWAY (GQ)",
    title: "National Highway 19 (Grand Trunk Road)",
    dist: "Delhi-Kolkata Trunk Bypass",
    route: "NH19 Bypass Corridor",
    desc: "Part of the Golden Quadrilateral project, this 6-lane highway bypasses south of Varanasi. It crosses the Ganges over the Ramnagar Bridge, connecting Prayagraj (West) and Kolkata (East).",
    features: [
      "Part of the historic Grand Trunk Road network",
      "6-lane high-speed bypass crossing the Ganges at Ramnagar",
      "Connects heavy industrial and long-distance freight traffic"
    ]
  },
  nh35: {
    tag: "NATIONAL HIGHWAY",
    title: "National Highway 35 (Prayagraj Highway)",
    dist: "Varanasi to Prayagraj / Mirzapur",
    route: "NH35 Corridor",
    desc: "A crucial western corridor connecting Kashi to the industrial zones of Mirzapur and the holy Triveni Sangam in Prayagraj, supporting local pilgrimage and tourist traffic.",
    features: [
      "Direct pilgrimage corridor to Prayagraj (Triveni Sangam)",
      "Connects southern ghat sectors to the industrial zones of Mirzapur",
      "Well-maintained road with regular inter-city bus networks"
    ]
  },
  ring_road: {
    tag: "EXPRESSWAY BYPASS",
    title: "Varanasi Ring Road Bypass",
    dist: "Orbital Bypass (Phase 1 & 2)",
    route: "4-Lane Circular Expressway",
    desc: "A state-of-the-art orbital bypass wrapping around the northern and eastern borders of Varanasi. It links major highways to let travelers bypass central city gridlocks to Sarnath or the airport.",
    features: [
      "4-lane access-controlled circular bypass corridor",
      "Drastically reduces travel time to the Sarnath archaeological site",
      "Connects NH19 (GQ) with the LBS Babatpur Airport directly"
    ]
  }
};

// App Controller & State
const App = {
  activeFilter: 'all',
  searchQuery: '',
  ghatsPerPage: 15,
  visibleGhatsCount: 15,
  filteredGhats: [],
  bgAudio: null,
  isAudioPlaying: false,

  init() {
    this.filteredGhats = [...GHATS_DATABASE];
    
    // Select elements
    this.ghatsGrid = document.getElementById('ghats-grid');
    this.searchInput = document.getElementById('search-ghat');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.loadMoreBtn = document.getElementById('btn-load-more');
    this.statsCount = document.getElementById('stats-count');
    this.audioToggle = document.getElementById('audio-toggle');
    
    // Theme elements
    this.themeCards = document.querySelectorAll('.theme-card');
    this.themePanel = document.getElementById('theme-details-panel');

    // Modal elements
    this.modal = document.getElementById('ghat-modal');
    this.modalImg = document.getElementById('modal-img');
    this.modalNum = document.getElementById('modal-num');
    this.modalTitle = document.getElementById('modal-title');
    this.modalPatron = document.getElementById('modal-patron');
    this.modalCategory = document.getElementById('modal-category');
    this.modalDesc = document.getElementById('modal-desc');
    this.modalClose = document.getElementById('modal-close');

    // Craft Modal elements
    this.craftModal = document.getElementById('craft-modal');
    this.craftModalImg = document.getElementById('craft-modal-img');
    this.craftModalTag = document.getElementById('craft-modal-tag');
    this.craftModalTitle = document.getElementById('craft-modal-title');
    this.craftSpecCategory = document.getElementById('craft-spec-category');
    this.craftSpecHubs = document.getElementById('craft-spec-hubs');
    this.craftSpecTime = document.getElementById('craft-spec-time');
    this.craftDescLegacy = document.getElementById('craft-desc-legacy');
    this.craftDescProcess = document.getElementById('craft-desc-process');
    this.craftDescSupport = document.getElementById('craft-desc-support');
    this.craftModalClose = document.getElementById('craft-modal-close');
    
    // Scroll Top button
    this.scrollTopBtn = document.getElementById('scroll-top');

    // Attach Event Listeners
    this.setupEventListeners();
    
    // Render initial page items
    this.renderGhats();
    this.updateStats();
    
    // Render the Kashi Riverfront Map Guide nodes
    this.renderPathNodes();
    
    // Generate floating diya particles
    this.createDiyaParticles();

    // Fetch Live Weather & Air Quality widget data
    this.fetchLiveWeather();

    // Initialize Transit Map UI
    this.initTransitMap();

    // Initial audio setup (Maha Mrityunjaya Mantra by Anandmurti Gurumaa)
    this.bgAudio = new Audio('https://archive.org/download/mahamrityunjaya/Anandmurti%20Gurumaa%20-%20Maha%20Mrityunjaya.mp3');
    this.bgAudio.loop = true;
    this.bgAudio.volume = 0.4;
    
    // Fade out loading screen on window load or after an 800ms safety timeout (avoids hanging on slow media assets)
    const fadeLoader = () => {
      if (document.body.classList.contains('loaded')) return;
      document.body.classList.add('loaded');
      const loader = document.getElementById('loader-overlay');
      if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 600);
      }
    };
    window.addEventListener('load', fadeLoader);
    setTimeout(fadeLoader, 800);
  },

  setupEventListeners() {
    // Search event
    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      
      // Deactivate map timeline nodes when typing a custom query
      document.querySelectorAll('.path-node').forEach(n => n.classList.remove('active'));
      this.filterAndRender();
    });

    // Filter tags events
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.filterButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.activeFilter = e.target.dataset.filter;
        
        // Clear timeline node active states
        document.querySelectorAll('.path-node').forEach(n => n.classList.remove('active'));
        this.filterAndRender();
      });
    });

    // Theme selector click events
    this.themeCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const themeKey = e.currentTarget.dataset.theme;
        this.switchTheme(themeKey);
      });
    });

    // Load more button event
    this.loadMoreBtn.addEventListener('click', () => {
      this.visibleGhatsCount += this.ghatsPerPage;
      this.renderGhats();
    });

    // Modal close event
    this.modalClose.addEventListener('click', () => this.closeModal());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });

    // Craft modal close events
    this.craftModalClose.addEventListener('click', () => this.closeCraftModal());
    this.craftModal.addEventListener('click', (e) => {
      if (e.target === this.craftModal) this.closeCraftModal();
    });

    // Escape key closes modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
        this.closeCraftModal();
      }
    });

    // Craft modal tabs click handler
    document.querySelectorAll('.craft-tab-trigger').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        const tabName = e.currentTarget.dataset.craftTab;
        const modal = e.currentTarget.closest('#craft-modal');

        modal.querySelectorAll('.craft-tab-trigger').forEach(t => t.classList.remove('active'));
        modal.querySelectorAll('.craft-tab-panel').forEach(p => p.classList.remove('active'));

        e.currentTarget.classList.add('active');
        const targetPanel = modal.querySelector(`[data-craft-panel="${tabName}"]`);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });

    // Audio toggle click
    this.audioToggle.addEventListener('click', () => this.toggleAudio());

    // Scroll event for Header & ScrollTop Button
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
        this.scrollTopBtn.classList.add('visible');
      } else {
        header.classList.remove('scrolled');
        this.scrollTopBtn.classList.remove('visible');
      }
    });

    // Scroll to top click
    this.scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Temple tabs click handler
    document.querySelectorAll('.temple-card').forEach(card => {
      const triggers = card.querySelectorAll('.tab-trigger');
      const panels = card.querySelectorAll('.tab-panel');
      
      triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          const tabName = e.currentTarget.dataset.tab;
          
          triggers.forEach(t => t.classList.remove('active'));
          panels.forEach(p => p.classList.remove('active'));
          
          e.currentTarget.classList.add('active');
          const targetPanel = card.querySelector(`[data-panel="${tabName}"]`);
          if (targetPanel) {
            targetPanel.classList.add('active');
          }
        });
      });
    });

    // Gallery card click handlers
    document.querySelectorAll('.gallery-card').forEach(card => {
      card.addEventListener('click', () => {
        const craftKey = card.dataset.craft;
        this.openCraftModal(craftKey);
      });
    });

    // Setup reveal animations on scroll
    this.setupScrollAnimations();
  },

  switchTheme(themeKey) {
    const data = THEMES_DATABASE[themeKey];
    if (!data) return;

    // Toggle active state on selector cards
    this.themeCards.forEach(card => {
      if (card.dataset.theme === themeKey) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // Smooth transition fade out
    this.themePanel.classList.add('fade-out');

    setTimeout(() => {
      let attractionsHTML = '';
      data.attractions.forEach(a => {
        attractionsHTML += `<li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);"><i class="fa-solid fa-circle-check" style="color: var(--accent-gold);"></i> ${a}</li>`;
      });

      let experiencesHTML = '';
      data.experiences.forEach(ex => {
        experiencesHTML += `<li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);"><i class="fa-solid fa-star" style="color: var(--accent-saffron); font-size: 0.8rem;"></i> ${ex}</li>`;
      });

      let actionsHTML = '';
      data.actions.forEach(act => {
        if (act.secondary) {
          actionsHTML += `<a href="${act.link}" class="btn-gold" style="background: rgba(11, 34, 64, 0.04); border: 1px solid rgba(11, 34, 64, 0.1); color: var(--text-primary); font-size: 0.85rem; padding: 0.7rem 1.5rem; box-shadow: none;">${act.text} <i class="fa-solid ${act.icon}"></i></a>`;
        } else {
          actionsHTML += `<a href="${act.link}" class="btn-gold" style="font-size: 0.85rem; padding: 0.7rem 1.5rem;">${act.text} <i class="fa-solid ${act.icon}"></i></a>`;
        }
      });

      this.themePanel.innerHTML = `
        <div class="theme-details-grid">
          <div class="theme-details-main">
            <h3 class="theme-details-title" style="color: ${data.color}; font-size: 1.8rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; font-family: var(--font-display);">
              <i class="fa-solid ${data.icon}"></i> ${data.title}
            </h3>
            <p class="theme-details-desc" style="font-size: 1rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 1.5rem;">
              ${data.desc}
            </p>
            <div class="theme-action-wrapper" style="display: flex; gap: 1rem;">
              ${actionsHTML}
            </div>
          </div>
          
          <div class="theme-details-list-sec">
            <h4 style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.8rem; font-weight: 700; font-family: var(--font-body);">Top Attractions</h4>
            <ul class="theme-highlights" style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; padding-left: 0;">
              ${attractionsHTML}
            </ul>
            
            <h4 style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.8rem; font-weight: 700; font-family: var(--font-body);">Signature Experiences</h4>
            <ul class="theme-highlights" style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; padding-left: 0;">
              ${experiencesHTML}
            </ul>
          </div>
        </div>
      `;

      this.themePanel.classList.remove('fade-out');
    }, 300);
  },

  createDiyaParticles() {
    const container = document.getElementById('diya-particles');
    if (!container) return;
    
    const count = 35; // particle count
    for (let i = 0; i < count; i++) {
      const diya = document.createElement('div');
      diya.className = 'diya-node';
      
      const size = Math.random() * 8 + 4; // 4px to 12px
      const left = Math.random() * 100; // 0% to 100%
      const delay = Math.random() * 12; // 0s to 12s delay
      const duration = Math.random() * 8 + 8; // 8s to 16s duration
      const drift = Math.random() * 80 - 40; // -40px to 40px drift
      
      diya.style.width = `${size}px`;
      diya.style.height = `${size}px`;
      diya.style.left = `${left}%`;
      diya.style.animationDelay = `${delay}s`;
      diya.style.animationDuration = `${duration}s`;
      diya.style.setProperty('--drift-x', `${drift}px`);
      
      container.appendChild(diya);
    }
  },

  renderPathNodes() {
    const container = document.getElementById('path-nodes');
    if (!container) return;
    container.innerHTML = '';
    
    PATH_NODES.forEach((node, idx) => {
      const el = document.createElement('div');
      el.className = 'path-node';
      
      const label = node.label;
      const title = node.name;
      const numLabel = `#${node.number}`;

      el.innerHTML = `
        <div class="node-circle"></div>
        <span class="node-label">${label}</span>
        <span class="node-num">${numLabel}</span>
      `;
      
      el.addEventListener('click', () => {
        document.querySelectorAll('.path-node').forEach(n => n.classList.remove('active'));
        el.classList.add('active');
        
        // Reset category filter tags to 'all' to show the specific node search
        this.filterButtons.forEach(b => b.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
        this.activeFilter = 'all';
        
        // Apply specific search
        this.searchInput.value = title;
        this.searchQuery = title.toLowerCase();
        this.filterAndRender();
        
        // Scroll explorer panel smoothly into view
        const explorerPanel = document.querySelector('.explorer-panel');
        explorerPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      
      container.appendChild(el);
    });
  },

  filterAndRender() {
    this.filteredGhats = GHATS_DATABASE.filter(ghat => {
      const name = ghat.name;
      const patron = ghat.patron && ghat.patron !== 'not available' && ghat.patron !== '.' ? ghat.patron : '';
      const desc = ghat.description;
      
      const matchesSearch = name.toLowerCase().includes(this.searchQuery) ||
                            patron.toLowerCase().includes(this.searchQuery) ||
                            desc.toLowerCase().includes(this.searchQuery);
      const matchesFilter = this.activeFilter === 'all' || ghat.category === this.activeFilter;
      return matchesSearch && matchesFilter;
    });

    this.visibleGhatsCount = this.ghatsPerPage;
    this.renderGhats();
    this.updateStats();
  },

  renderGhats() {
    this.ghatsGrid.innerHTML = '';
    const itemsToRender = this.filteredGhats.slice(0, this.visibleGhatsCount);

    if (itemsToRender.length === 0) {
      const notFoundMsg = "Kashi's riverfront is infinite, but we couldn't find matches.";
      const notFoundSub = "Try checking spelling or choosing a different category filter.";
      this.ghatsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
          <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">${notFoundMsg}</p>
          <p style="font-size: 0.9rem; color: var(--text-muted);">${notFoundSub}</p>
        </div>
      `;
      this.loadMoreBtn.style.display = 'none';
      return;
    }

    itemsToRender.forEach(ghat => {
      const card = document.createElement('div');
      card.className = 'ghat-card';
      card.setAttribute('data-id', ghat.number);
      
      const name = ghat.name;
      const patron = ghat.patron && ghat.patron !== 'not available' && ghat.patron !== '.' ? ghat.patron : '';
      const numLabel = `GHAT #${ghat.number}`;
      const patronLabel = patron ? `<strong>Renovator:</strong> ${patron}` : `<em>Ancient Sacred Landmark</em>`;

      card.innerHTML = `
        <div class="ghat-number">${numLabel}</div>
        <h4 class="ghat-title">${name}</h4>
        <div class="ghat-patron">
          ${patronLabel}
        </div>
      `;
      
      card.addEventListener('click', () => this.openModal(ghat));
      this.ghatsGrid.appendChild(card);
    });

    // Manage load more button visibility
    if (this.visibleGhatsCount >= this.filteredGhats.length) {
      this.loadMoreBtn.style.display = 'none';
    } else {
      this.loadMoreBtn.style.display = 'block';
    }
  },

  updateStats() {
    this.statsCount.textContent = `Showing ${this.filteredGhats.length} ghats matching your criteria`;
  },

  openCraftModal(craftKey) {
    const craft = CRAFTS_DATABASE[craftKey];
    if (!craft) return;

    this.craftModalTag.textContent = craft.tag;
    this.craftModalTitle.textContent = craft.title;
    this.craftSpecCategory.textContent = craft.category;
    this.craftSpecHubs.textContent = craft.hubs;
    this.craftSpecTime.textContent = craft.time;
    this.craftDescLegacy.textContent = craft.description;

    // Generate process steps timeline
    this.craftDescProcess.innerHTML = '';
    craft.process.forEach(p => {
      const stepEl = document.createElement('div');
      stepEl.className = 'process-step';
      
      stepEl.innerHTML = `
        <div class="process-num-circle">${p.step}</div>
        <div class="process-content">
          <h4 class="process-step-title">${p.title}</h4>
          <p class="process-step-desc">${p.desc}</p>
        </div>
      `;
      this.craftDescProcess.appendChild(stepEl);
    });

    // Generate support outlets table
    this.craftDescSupport.innerHTML = '';
    craft.support.forEach(s => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td style="padding: 0.5rem 0; font-weight: bold; color: var(--accent-blue); font-size: 0.85rem;"><i class="fa-solid fa-store" style="margin-right: 0.4rem; color: var(--accent-saffron); font-size: 0.85rem; text-align: right;"></i> ${s.label}</td>
        <td style="padding: 0.5rem 0; color: var(--text-secondary); font-size: 0.85rem; text-align: right;">${s.val}</td>
      `;
      this.craftDescSupport.appendChild(row);
    });

    this.craftModalImg.src = craft.image;
    this.craftModalImg.alt = `${craft.title} - Hello Banaras`;

    // Reset tabs to default active 'legacy'
    this.craftModal.querySelectorAll('.craft-tab-trigger').forEach(t => t.classList.remove('active'));
    this.craftModal.querySelectorAll('.craft-tab-panel').forEach(p => p.classList.remove('active'));
    const legTab = this.craftModal.querySelector('[data-craft-tab="legacy"]');
    const legPan = this.craftModal.querySelector('[data-craft-panel="legacy"]');
    if (legTab) legTab.classList.add('active');
    if (legPan) legPan.classList.add('active');

    this.craftModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeCraftModal() {
    this.craftModal.classList.remove('open');
    document.body.style.overflow = '';
  },

  openModal(ghat) {
    const numLabel = `GHAT #${ghat.number}`;
    const name = ghat.name;
    const patron = ghat.patron && ghat.patron !== 'not available' && ghat.patron !== '.' ? ghat.patron : 'Ancient Pilgrimage Heritage';
    
    const categoryMap = {
      'panchtirthi': 'Panchtirthi (Holiest Shrine)',
      'cremation': 'Cremation Ritual Site',
      'palace': 'Historic Royal Palace',
      'historical': 'Historical & Mythological Landmark',
      'bathing': 'Sacred Bathing Ghat'
    };

    this.modalNum.textContent = numLabel;
    this.modalTitle.textContent = name;
    this.modalPatron.textContent = patron;
    this.modalCategory.textContent = categoryMap[ghat.category] || 'Spiritual Embankment';
    this.modalDesc.textContent = ghat.description;

    // Prioritize the actual, specific real image of this specific ghat
    let photoUrl = ghat.image;
    
    // If not available (blank from Wikipedia), fallback to our high-resolution curated Varanasi pool
    if (!photoUrl) {
      photoUrl = GHAT_PHOTOS[ghat.number % GHAT_PHOTOS.length];
      if (ghat.category === 'cremation') {
        photoUrl = GHAT_PHOTOS[7]; // Twilight temple lights
      } else if (ghat.category === 'palace') {
        photoUrl = GHAT_PHOTOS[5]; // Sandstone architecture
      } else if (ghat.category === 'panchtirthi') {
        photoUrl = ghat.number === 41 ? GHAT_PHOTOS[2] : GHAT_PHOTOS[0];
      }
    }
    
    // Setup error fallback chain for the image to handle Wikipedia/Wikimedia scale failures gracefully
    this.modalImg.onerror = () => {
      const currentSrc = this.modalImg.src;
      if (currentSrc.includes('/960px-')) {
        this.modalImg.src = currentSrc.replace('/960px-', '/500px-');
      } else if (currentSrc.includes('/500px-')) {
        this.modalImg.src = currentSrc.replace('/500px-', '/250px-');
      } else if (currentSrc.includes('/250px-')) {
        this.modalImg.src = currentSrc.replace('/250px-', '/220px-');
      } else if (currentSrc.includes('/220px-')) {
        this.modalImg.src = currentSrc.replace('/220px-', '/120px-');
      } else {
        // Ultimate fallback to curated Varanasi Unsplash photo pool
        let fallbackUrl = GHAT_PHOTOS[ghat.number % GHAT_PHOTOS.length];
        if (ghat.category === 'cremation') {
          fallbackUrl = GHAT_PHOTOS[7];
        } else if (ghat.category === 'palace') {
          fallbackUrl = GHAT_PHOTOS[5];
        } else if (ghat.category === 'panchtirthi') {
          fallbackUrl = ghat.number === 41 ? GHAT_PHOTOS[2] : GHAT_PHOTOS[0];
        }
        this.modalImg.src = fallbackUrl;
        this.modalImg.onerror = null; // Prevent infinite loop
      }
    };

    this.modalImg.src = photoUrl;
    this.modalImg.alt = `${ghat.name} Real Photo - Hello Banaras`;

    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // lock scroll
  },

  closeModal() {
    this.modal.classList.remove('open');
    document.body.style.overflow = ''; // unlock scroll
  },

  fetchLiveWeather() {
    const lat = 25.3176;
    const lon = 83.0062;
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,wind_speed_10m`;
    const aqiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi`;

    const weatherTemp = document.getElementById('weather-temp');
    const weatherPrecip = document.getElementById('weather-precip');
    const weatherWind = document.getElementById('weather-wind');
    const weatherAqi = document.getElementById('weather-aqi');

    const getFallbackData = () => {
      const currentMonth = new Date().getMonth();
      let baseTemp = 28;
      let basePrecip = 2;
      let baseWind = 10;
      let baseAqi = 110;

      if (currentMonth >= 2 && currentMonth <= 5) {
        baseTemp = 36 + Math.random() * 5;
        basePrecip = 0;
        baseWind = 8 + Math.random() * 6;
        baseAqi = 130 + Math.floor(Math.random() * 50);
      } else if (currentMonth >= 6 && currentMonth <= 8) {
        baseTemp = 29 + Math.random() * 3;
        basePrecip = Math.random() * 15;
        baseWind = 12 + Math.random() * 8;
        baseAqi = 45 + Math.floor(Math.random() * 40);
      } else {
        baseTemp = 16 + Math.random() * 6;
        basePrecip = 0;
        baseWind = 4 + Math.random() * 5;
        baseAqi = 160 + Math.floor(Math.random() * 80);
      }

      return {
        temperature: baseTemp.toFixed(1),
        precipitation: basePrecip.toFixed(1),
        windSpeed: baseWind.toFixed(1),
        aqi: baseAqi
      };
    };

    const updateUI = (data) => {
      if (weatherTemp) weatherTemp.innerHTML = `<i class="fa-solid fa-thermometer-half" style="color: var(--accent-gold);"></i> ${data.temperature}°C`;
      if (weatherPrecip) weatherPrecip.innerHTML = `<i class="fa-solid fa-cloud-showers-water" style="color: var(--accent-gold);"></i> ${data.precipitation}mm`;
      if (weatherWind) weatherWind.innerHTML = `<i class="fa-solid fa-wind" style="color: var(--accent-gold);"></i> ${data.windSpeed} km/h`;
      
      let aqiStatus = "Good";
      let aqiColor = "#2ecc71";
      if (data.aqi > 50 && data.aqi <= 100) {
        aqiStatus = "Moderate";
        aqiColor = "#f1c40f";
      } else if (data.aqi > 100 && data.aqi <= 150) {
        aqiStatus = "Unhealthy for Sensitive Groups";
        aqiColor = "#e67e22";
      } else if (data.aqi > 150) {
        aqiStatus = "Unhealthy";
        aqiColor = "#e74c3c";
      }

      if (weatherAqi) {
        weatherAqi.innerHTML = `<i class="fa-solid fa-lungs" style="color: var(--accent-gold);"></i> AQI ${data.aqi}`;
        weatherAqi.setAttribute('title', `Air Quality Index: ${data.aqi} (${aqiStatus})`);
      }
    };

    const fetchWithTimeout = (url, timeout = 5000) => {
      return Promise.race([
        fetch(url),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
      ]);
    };

    Promise.all([
      fetchWithTimeout(weatherUrl).then(res => res.json()),
      fetchWithTimeout(aqiUrl).then(res => res.json())
    ]).then(([weatherData, aqiData]) => {
      const current = weatherData.current;
      const currentAqi = aqiData.current;
      
      updateUI({
        temperature: current.temperature_2m.toFixed(1),
        precipitation: current.precipitation.toFixed(1),
        windSpeed: current.wind_speed_10m.toFixed(1),
        aqi: currentAqi.us_aqi
      });
    }).catch(err => {
      console.warn("Unable to fetch live weather data. Using simulated seasonal forecast.", err);
      updateUI(getFallbackData());
    });
  },

  toggleAudio() {
    if (this.isAudioPlaying) {
      this.bgAudio.pause();
      this.audioToggle.classList.remove('playing');
      this.audioToggle.querySelector('strong').textContent = 'Play Mantra';
    } else {
      this.bgAudio.play().then(() => {
        this.audioToggle.classList.add('playing');
        this.audioToggle.querySelector('strong').textContent = 'Mute Mantra';
      }).catch(err => {
        console.warn("Audio playback prevented by browser permissions. Interact first.", err);
      });
    }
    this.isAudioPlaying = !this.isAudioPlaying;
  },

  initTransitMap() {
    if (!document.getElementById('connectivity-map')) return;

    const toggleBtns = document.querySelectorAll('.transit-toggle-btn');

    // Safe fallback if Leaflet L is undefined (e.g. Node tests)
    if (typeof L === 'undefined') {
      toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          toggleBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          const layer = btn.dataset.filterLayer;
          const cards = document.querySelectorAll('.directory-card');
          cards.forEach(card => {
            const cardType = card.getAttribute('data-type');
            if (layer === 'all' || cardType === layer) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });

      // Populate directory in fallback mode
      const directoryContainer = document.getElementById('transit-directory');
      if (directoryContainer) {
        directoryContainer.innerHTML = '';
        Object.keys(TRANSIT_DATABASE).forEach(key => {
          const item = TRANSIT_DATABASE[key];
          let typeClass = 'highway';
          let typeLabel = 'Highway';
          let icon = 'fa-road';
          if (key === 'airport') {
            typeClass = 'air';
            typeLabel = 'Airways';
            icon = 'fa-plane';
          } else if (key.startsWith('station_')) {
            typeClass = 'rail';
            typeLabel = 'Railways';
            icon = 'fa-train';
          }

          const card = document.createElement('div');
          card.className = 'directory-card';
          card.setAttribute('data-key', key);
          card.setAttribute('data-type', typeClass);
          card.innerHTML = `
            <div class="dir-card-header">
              <div class="dir-card-icon-wrapper ${typeClass}">
                <i class="fa-solid ${icon}"></i>
              </div>
              <div class="dir-card-title-area">
                <span class="dir-card-badge ${typeClass}">${typeLabel}</span>
                <h4 class="dir-card-title">${item.title}</h4>
              </div>
            </div>
            <div class="dir-card-details">
              <div class="dir-detail-row">
                <span class="dir-detail-label"><i class="fa-solid fa-location-dot"></i> Distance</span>
                <span class="dir-detail-value">${item.dist}</span>
              </div>
              <div class="dir-detail-row">
                <span class="dir-detail-label"><i class="fa-solid fa-route"></i> Access Route</span>
                <span class="dir-detail-value">${item.route}</span>
              </div>
            </div>
            <p class="dir-card-desc">${item.desc}</p>
          `;
          card.addEventListener('click', () => {
            document.querySelectorAll('.directory-card').forEach(c => {
              if (c.getAttribute('data-key') === key) {
                c.classList.add('active');
              } else {
                c.classList.remove('active');
              }
            });
          });
          directoryContainer.appendChild(card);
        });

        // Select default active card in fallback mode
        const firstCard = directoryContainer.querySelector('[data-key="airport"]');
        if (firstCard) firstCard.classList.add('active');
      }

      return;
    }

    try {
      const map = L.map('connectivity-map', {
        center: [25.3400, 82.9800],
        zoom: 11,
        minZoom: 10,
        maxZoom: 16,
        scrollWheelZoom: false
      });

      map.on('focus', () => { map.scrollWheelZoom.enable(); });
      map.on('blur', () => { map.scrollWheelZoom.disable(); });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }).addTo(map);

      const airGroup = L.layerGroup().addTo(map);
      const railGroup = L.layerGroup().addTo(map);
      const highwayGroup = L.layerGroup().addTo(map);

      const mapMarkers = {};
      const markerDefs = [
        {
          key: 'airport',
          coords: [25.4497, 82.8584],
          color: 'saffron',
          title: 'VNS Airport',
          group: airGroup
        },
        {
          key: 'station_bsb',
          coords: [25.3283, 82.9730],
          color: 'blue',
          title: 'BSB Cantt Station',
          group: railGroup
        },
        {
          key: 'station_bsbs',
          coords: [25.3150, 82.9660],
          color: 'gold',
          title: 'BSBS Banaras Station',
          group: railGroup
        },
        {
          key: 'station_kei',
          coords: [25.3280, 83.0298],
          color: 'gold',
          title: 'KEI Kashi Station',
          group: railGroup
        },
        {
          key: 'station_ddu',
          coords: [25.2818, 83.1235],
          color: 'saffron',
          title: 'DDU Mughalsarai Junction',
          group: railGroup
        }
      ];

      const selectTransitElement = (key, centerCoords, routeKey = null) => {
        Object.keys(mapMarkers).forEach(mKey => {
          const marker = mapMarkers[mKey];
          const markerEl = marker.getElement();
          if (markerEl) {
            if (mKey === key) {
              markerEl.classList.add('active');
            } else {
              markerEl.classList.remove('active');
            }
          }
        });

        Object.keys(mapPolylines).forEach(pKey => {
          const polyline = mapPolylines[pKey];
          const originalDef = routeDefs.find(r => r.key === pKey);
          if (originalDef) {
            if (pKey === routeKey || pKey === key) {
              polyline.setStyle({
                weight: originalDef.options.weight + 2,
                opacity: 1
              });
            } else {
              polyline.setStyle({
                weight: originalDef.options.weight,
                opacity: 0.5
              });
            }
          }
        });

        // Update active directory card styling
        const dirCards = document.querySelectorAll('.directory-card');
        dirCards.forEach(card => {
          if (card.getAttribute('data-key') === key) {
            card.classList.add('active');
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
          } else {
            card.classList.remove('active');
          }
        });

        if (centerCoords) {
          map.flyTo(centerCoords, map.getZoom() < 12 ? 12 : map.getZoom(), {
            animate: true,
            duration: 1.2
          });
        }
      };

      markerDefs.forEach(def => {
        const icon = L.divIcon({
          className: 'custom-leaflet-marker',
          html: `<div class="marker-pin-outer ${def.color}"><div class="marker-pin-inner ${def.color}"></div></div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });

        const marker = L.marker(def.coords, { icon: icon }).addTo(def.group);
        mapMarkers[def.key] = marker;

        marker.bindTooltip(def.title, {
          permanent: false,
          direction: 'top',
          className: 'custom-leaflet-tooltip',
          offset: [0, -10]
        });

        marker.on('click', () => {
          selectTransitElement(def.key, def.coords);
        });
      });

      const mapPolylines = {};
      const routeDefs = [
        {
          key: 'nh31',
          coords: [
            [25.4497, 82.8584],
            [25.4200, 82.8900],
            [25.3900, 82.9200],
            [25.3550, 82.9500],
            [25.3283, 82.9730]
          ],
          options: {
            color: '#cf4500',
            weight: 5,
            opacity: 0.8,
            lineJoin: 'round'
          },
          group: highwayGroup,
          title: 'NH31 (Airport Expressway)'
        },
        {
          key: 'nh19',
          coords: [
            [25.2300, 82.8800],
            [25.2450, 82.9200],
            [25.2600, 82.9600],
            [25.2720, 83.0100],
            [25.2750, 83.0500],
            [25.2700, 83.1000],
            [25.2818, 83.1235]
          ],
          options: {
            color: '#b37400',
            weight: 5,
            opacity: 0.8,
            lineJoin: 'round'
          },
          group: highwayGroup,
          title: 'NH19 (Grand Trunk Road Bypass)'
        },
        {
          key: 'nh35',
          coords: [
            [25.3150, 82.9660],
            [25.2950, 82.9300],
            [25.2750, 82.8900],
            [25.2500, 82.8200]
          ],
          options: {
            color: '#b37400',
            weight: 4,
            opacity: 0.8,
            lineJoin: 'round'
          },
          group: highwayGroup,
          title: 'NH35 (Prayagraj Highway)'
        },
        {
          key: 'ring_road',
          coords: [
            [25.2800, 82.8800],
            [25.3300, 82.8700],
            [25.3800, 82.8900],
            [25.4100, 82.9300],
            [25.4200, 83.0000],
            [25.3900, 83.0600],
            [25.3400, 83.0900],
            [25.2800, 83.1000]
          ],
          options: {
            color: '#0b2240',
            weight: 5,
            opacity: 0.8,
            lineJoin: 'round'
          },
          group: highwayGroup,
          title: 'Varanasi Ring Road'
        },
        {
          key: 'rail_bsb_bsbs',
          coords: [
            [25.3283, 82.9730],
            [25.3150, 82.9660]
          ],
          options: {
            color: '#2c3e50',
            weight: 3,
            dashArray: '5, 8',
            opacity: 0.9
          },
          group: railGroup,
          title: 'Railway: Cantt to Banaras'
        },
        {
          key: 'rail_bsb_kei',
          coords: [
            [25.3283, 82.9730],
            [25.3280, 83.0298]
          ],
          options: {
            color: '#2c3e50',
            weight: 3,
            dashArray: '5, 8',
            opacity: 0.9
          },
          group: railGroup,
          title: 'Railway: Cantt to Kashi'
        },
        {
          key: 'rail_kei_ddu',
          coords: [
            [25.3280, 83.0298],
            [25.3050, 83.0800],
            [25.2818, 83.1235]
          ],
          options: {
            color: '#2c3e50',
            weight: 3,
            dashArray: '5, 8',
            opacity: 0.9
          },
          group: railGroup,
          title: 'Railway: Kashi to DDU Junction'
        },
        {
          key: 'rail_bsb_vns',
          coords: [
            [25.3283, 82.9730],
            [25.3600, 82.9400],
            [25.4000, 82.9000],
            [25.4400, 82.8600]
          ],
          options: {
            color: '#2c3e50',
            weight: 3,
            dashArray: '5, 8',
            opacity: 0.9
          },
          group: railGroup,
          title: 'Railway: Cantt to Babatpur'
        }
      ];

      routeDefs.forEach(def => {
        const polyline = L.polyline(def.coords, def.options).addTo(def.group);
        mapPolylines[def.key] = polyline;

        polyline.bindTooltip(def.title, {
          sticky: true,
          className: 'custom-leaflet-tooltip'
        });

        polyline.on('click', () => {
          let detailKey = def.key;
          if (def.key.startsWith('rail_')) {
            detailKey = 'station_bsb';
          }
          const midIdx = Math.floor(def.coords.length / 2);
          selectTransitElement(detailKey, def.coords[midIdx], def.key);
        });
      });

      toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          toggleBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          const layer = btn.dataset.filterLayer;
          
          if (layer === 'all') {
            map.addLayer(airGroup);
            map.addLayer(railGroup);
            map.addLayer(highwayGroup);
          } else {
            if (layer === 'air') map.addLayer(airGroup); else map.removeLayer(airGroup);
            if (layer === 'rail') map.addLayer(railGroup); else map.removeLayer(railGroup);
            if (layer === 'highway') map.addLayer(highwayGroup); else map.removeLayer(highwayGroup);
          }
        });
      });

      // Populate directory dynamically
      const directoryContainer = document.getElementById('transit-directory');
      if (directoryContainer) {
        directoryContainer.innerHTML = '';
        Object.keys(TRANSIT_DATABASE).forEach(key => {
          const item = TRANSIT_DATABASE[key];
          
          let typeClass = 'highway';
          let typeLabel = 'Highway';
          if (key === 'airport') {
            typeClass = 'air';
            typeLabel = 'Airways';
          } else if (key.startsWith('station_')) {
            typeClass = 'rail';
            typeLabel = 'Railways';
          }
          
          const card = document.createElement('div');
          card.className = 'directory-card';
          card.setAttribute('data-key', key);
          card.setAttribute('data-type', typeClass);
          
          card.innerHTML = `
            <div class="dir-card-badge ${typeClass}">${typeLabel}</div>
            <h4 class="dir-card-title">${item.title}</h4>
            <div class="dir-card-metrics">
              <span><i class="fa-solid fa-location-dot"></i> ${item.dist}</span>
              <span><i class="fa-solid fa-route"></i> ${item.route}</span>
            </div>
            <p class="dir-card-desc">${item.desc}</p>
          `;
          
          card.addEventListener('click', () => {
            let coords = null;
            if (mapMarkers[key]) {
              coords = mapMarkers[key].getLatLng();
            } else if (mapPolylines[key]) {
              const polyCoords = mapPolylines[key].getLatLngs();
              const midIdx = Math.floor(polyCoords.length / 2);
              coords = polyCoords[midIdx];
            }
            selectTransitElement(key, coords);
          });
          
          directoryContainer.appendChild(card);
        });
      }

      // Select default (airport)
      setTimeout(() => {
        selectTransitElement('airport', [25.4497, 82.8584]);
      }, 500);

    } catch (err) {
      console.warn("Leaflet map initialization failed: ", err);
      // Fallback
      toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          toggleBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    }
  },

  setupScrollAnimations() {
    const options = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    }, options);

    const animateElements = document.querySelectorAll('.temple-card, .explorer-panel, .heritage-frame, .pilgrimage-path-container, .connectivity-map-card, .connectivity-info-card, .transit-controls');
    animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(25px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });
  }
};

// Initialize App on DOM load
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
