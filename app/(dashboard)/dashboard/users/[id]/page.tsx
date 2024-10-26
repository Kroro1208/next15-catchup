import React from 'react'

const UserProfilePage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    return (
    <div className="text-3xl">
        UserProfile: {id}
    </div>
    )
}

export default UserProfilePage
