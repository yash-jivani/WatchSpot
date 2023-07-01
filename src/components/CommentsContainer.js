import React from "react";

const data = [
    {
        name: "Yash",
        text: "hello world this is first comment",
        replies: [
            {
                name: "Yash 1",
                text: "hello world this is first comment",
                replies: [
                    {
                        name: "Yash 1a",
                        text: "hello world this is first comment",
                        replies: [
                            {
                                name: "Yash 2",
                                text: "hello world this is first comment",
                                replies: [
                                    {
                                        name: "Yash 2a",
                                        text: "hello world this is first comment",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: "Yash 2",
                text: "hello world this is first comment",
                replies: [
                    {
                        name: "Yash 2a",
                        text: "hello world this is first comment",
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        name: "Yash 2",
        text: "hello world this is first comment",
        replies: [
            {
                name: "Yash 2a",
                text: "hello world this is first comment",
                replies: [],
            },
        ],
    },
    {
        name: "Yash 3",
        text: "hello world this is first comment",
        replies: [
            {
                name: "Yash 2a",
                text: "hello world this is first comment",
                replies: [],
            },
        ],
    },
    {
        name: "Yash 4",
        text: "hello world this is first comment",
        replies: [
            {
                name: "Yash 2a",
                text: "hello world this is first comment",
                replies: [],
            },
        ],
    },
];

const Comment = ({ cmnt }) => {
    const { name, text } = cmnt;
    return (
        <div className='flex items-center gap-3 bg-gray-300 my-2 p-2'>
            <img
                className='h-9'
                src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
                alt=''
            />
            <div>
                <p className='font-semibold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CommnetList = ({ allComments }) => {
    return allComments.map((currCommnet, index) => {
        return (
            <div key={index}>
                <Comment cmnt={currCommnet} />
                <div className=' border-gray-600 border-l-4 ml-5'>
                    <CommnetList allComments={currCommnet.replies} />
                </div>
            </div>
        );
    });
};

const CommentsContainer = () => {
    return (
        <div className='mt-4 '>
            <h1 className='font-bold text-xl'>Comments: </h1>
            <CommnetList allComments={data} />
        </div>
    );
};

export default CommentsContainer;
