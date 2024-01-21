import { ChangeEvent, FormEvent, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { useGetAllCommentsQuery, usePostCommentMutation } from '@/redux/features/products/productApi';

interface IProps {
  id: string;
}

interface IComment {
  comment: string;
  _id: string;
  id: string;
}

export default function ProductReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [postComment, { isLoading, isError, isSuccess }] = usePostCommentMutation();
  const { data, isLoading: isCommentLoading, error } = useGetAllCommentsQuery(undefined, { refetchOnMountOrArgChange: true, pollingInterval: 30000 });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = { data: { comment: inputValue, _id: id } }
    console.log(options);

    postComment(options)
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  console.log(data)
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </form>
      <div className="mt-10">
        {data?.map((comment: IComment) => (
          <div key={comment?.id} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment?.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
