
  const data = [
    {
      id: 3,
      name: 'Cookies',
      photo_url:
      'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
    },
    {
      id: 1,
      name: 'Mexican Food',
      photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
    },
    {
      id: 2,
      name: 'Italian Food',
      photo_url:
        'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    },
    {
      id: 4,
      name: 'Smoothies',
      photo_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
    },
    {
      id: 0,
      name: 'Pizza',
      photo_url: 'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg'
    },
  ];
  
  
export const startSetCategories = () => {
  return {
    type: 'SET_CATEGORIES',
    data
  };
}