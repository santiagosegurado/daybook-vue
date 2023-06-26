

export default () => ({
  isLoading: false,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      picture: null, 
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      picture: null, 
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      picture: null, 
    },
  ],
});