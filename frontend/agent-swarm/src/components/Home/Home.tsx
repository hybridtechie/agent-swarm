import React, { useState, useEffect } from "react"
import { Card, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { listParticipants } from "@/lib/api"
import { Participant } from "@/types/types"
const Home: React.FC = () => {
	const [participants, setParticipants] = useState<Participant[]>([])

	useEffect(() => {
		listParticipants()
			.then((res) => setParticipants(res.data.participants))
			.catch(console.error)
	}, [])

	return (
		<div className="p-6">
			<h1 className="mb-4 text-3xl font-bold">Participants</h1>
			<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
				{participants.map((participant) => (
					<Card key={participant.id}>
						<div className="flex p-6">
							<Avatar className="h-14 w-14">
								<AvatarFallback>{participant.name.charAt(0) + participant.name.charAt(1)}</AvatarFallback>
							</Avatar>
							<div className="ml-4">
								<CardTitle className="text-lg">{participant.name}</CardTitle>
								<CardDescription>{participant.role}</CardDescription>
							</div>
						</div>
						<CardContent>
							{/* Show the first 100 characters of description */}
							<p className="text-sm text-muted-foreground">{participant.persona_description.slice(0, 100)}...</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}

export default Home
