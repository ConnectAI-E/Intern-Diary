import Link from 'next/link';
import {compareDesc, format, parseISO} from 'date-fns';
import {allPosts, Post} from 'contentlayer/generated';

function PostCard(post: Post) {
    // max 300 characters
    const description = post.description.length > 300 ? post.description.slice(0, 300) + '...' : post.description;

    return (
        <div className="mb-8">
            <h2 className="text-xl">
                <Link
                    href={ post.url }
                    className="text-blue-700 hover:text-blue-900"
                    legacyBehavior>
                    { post.title }
                </Link>
            </h2>
            <div className={'flex justify-start items-end mb-1 '}>
                <div className="text-xs text-gray-700 dark:text-gray-600">
                    { post.intern }
                </div>
                <time dateTime={ post.date } className="block  text-xs text-gray-600  ml-2">
                    { format(parseISO(post.date), 'LLLL d, yyyy') }
                </time>
            </div>

            <div className="text-sm">
                { description }
            </div>
        </div>
    );
}

export default function Home() {
    const posts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date)),
    );

    return (
        <div className="max-w-xl py-8 mx-auto">
            <h1 className="mb-8 text-3xl font-bold text-center">Intern Diary</h1>
            { posts.map((post, idx) => (
                <PostCard key={ idx } { ...post } />
            )) }
        </div>
    );
}
