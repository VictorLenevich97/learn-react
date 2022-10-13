interface ITitle {
  content: string;
}

export const Title = ({ content }: ITitle) => {
  return <h1 className="text-2xl font-bold text-gray-900">{content}</h1>;
};
