interface props {
  content: string;
}

const ContentLoader: React.FC<props> = (props) => {
  return (
    <div className='loader'>
      {props.content ? props.content : 'Please wait...'}
    </div>
  );
};

export default ContentLoader;
