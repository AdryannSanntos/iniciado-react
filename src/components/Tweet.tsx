type TweetProps = {
  text: string;
}

export function Tweet(props: TweetProps){
  return(
    <h3>{props.text}</h3>
  );
}