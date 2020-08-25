import React from "react";

export const TabPaneHelp: React.FC = () => {
	return (
		<>
			<p>
				Set a name for the seed, or click the 'Random' button to give it a
				random name. This name will set the randomness that the seed will be
				based off.
			</p>

			<p>
				Change the settings to your liking, toggle things on and off, change how
				things will be randomized. Make the seed work how you want to play it.
			</p>

			<ul>
				<li>
					<b>Vanilla:</b> this will leave the option as it is normally in the
					game, it will not be changed.
				</li>
				<li>
					<b>Replace:</b> this will add the option's rewards to the pool, and
					replace their location with useless items. Useful if you like the
					rewards of a world but you don't want to visit it.
				</li>
				<li>
					<b>Randomize:</b> this will add the option's rewards to the pool, and
					their locations will be able to get anything.
				</li>
			</ul>

			<p>
				After setting a name and the options for the seed, you can download it
				by pressing 'Download Seed'. Choose the correct language patch for your
				game when downloading.
			</p>

			<p>
				You can check the 'Spoiler Logs' to see where everything was randomized
				to.
			</p>

			<p>
				If you encounter any issues between the GoA mod and the seed (for
				example, no abilities on weapons), it's likely that the emulator is
				overriding the seed with mod settings. To solve this, rename the files
				in a way that the emulator will prioritize the seed. Can't seem to find
				a consistent setup for this, so you'll have to see what works for you by
				trial and error.
			</p>

			<p>
				<b>Experimental</b> features are still in development, so keep that in
				mind when enabling them. They will always be turned off by default and
				they will not be added to the Share url, so you'll have to enable them
				manually.
			</p>
		</>
	);
};
