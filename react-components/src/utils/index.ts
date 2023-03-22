export const randomId = () => Math.random().toString(36).substring(2, 15);
export const randomImage = () =>
  `https://picsum.photos/id/${Math.round(Math.random() * 15) + 10}/300/200`;

export const tags = ['Graphics', 'Design', 'Inspiration', 'Art', 'Modern', 'Vintage'];

export const changeTags = (tags: string[], tag: string) =>
  tags.includes(tag) ? tags.filter((el) => el !== tag) : [...tags, tag];