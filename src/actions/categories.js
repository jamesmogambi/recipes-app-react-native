
  const data = [
    {
    id: 0,
    name: 'BreakFast',
    time:'7.00-9.00 AM',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 3,
    name: 'Lunch',
    time:'12.00-2.00 PM',
    photo_url:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 2,
    name: 'Supper',
    time:'7.00-9.00 PM',
    photo_url: 'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg'
  },
  {
    id: 1,
    name: 'Snacks',
    time:'Anytime',
    photo_url:'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  },

  ];
  
  
export const startSetCategories = () => {
  return {
    type: 'SET_CATEGORIES',
    data
  };
}