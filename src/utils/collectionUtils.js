// Function to get a random element from a collection
export const getRandomx = (collection) => {
	const randomIndex = Math.floor(Math.random() * (collection.length - 1));
	return collection[randomIndex];
};
