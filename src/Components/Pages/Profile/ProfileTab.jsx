import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProfileTab = () => {
    let [categories] = useState({
        Activity_feed: [
            {
                id: 1,
                title: 'Fill Out Your Profile',
                descriptions: 'Add photos and info to your profile so people can find you easily and get to know you better!'
            }
        ],
        Trips: [
            {
                id: 1,
                title: 'Create your first Trip!',
                descriptions: 'Build wish lists, share recommendations, and organize travel plans with Trips!Create Trip'
            }
        ],
        Photos: [
            {
                id: 1,
                title: 'Post your first photo!',
                descriptions: 'Help other travelers see what you’ve seen — so they know what to expect!Post Photo'
            }
        ],
        Reviews: [
            {
                id: 1,
                title: 'Write your first review!',
                descriptions: 'Your opinion matters! Start reviewing hotels, things to do & more on Tripadvisor.Write Review'
            }
        ],
        Forums: [
            {
                id: 1,
                title: 'Have a question? Ask our forums!',
                descriptions: 'Other travelers are ready to help — and share advice & ideas'
            }
        ],
        Badges: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee'
            }
        ],
    })

    return (
        <div className="w-full lg:max-w-xl px-2 py-5 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex gap-5  p-3 overflow-x-auto bg-white">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) => classNames('whitespace-nowrap', selected ? 'border-b-2 border-cyan-500' : 'te')}
                        >
                            {category.split('_').join(' ')}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels className="mt-5">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <div>
                                {posts.map((post) => (
                                    <div key={post.id} className="relative text-center rounded-md p-3" >
                                        <h3 className="text-xl font-bold mb-3 leading-5">
                                            {post.title}
                                        </h3>
                                        <p>{post.descriptions}</p>
                                    </div>
                                ))}
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
export default ProfileTab
