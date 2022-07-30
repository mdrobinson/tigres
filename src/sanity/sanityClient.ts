import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'qjjrnahz',
	dataset: 'production',
	apiVersion: new Date().toISOString().slice(0, 10),
	token:
		'skWdbijM7p8GHvCRRoGttl3AwB8ImenM6Afj4VRL72tBkvu1LixZGnd9hgH4o2P468TOmP2QHXcpbUbwiszZJUVL2UQiOMWXMAIS0X8RJ5epNzRJX1Plcc5vtRD4lWofq2mzjmUw03OrqAflGaZ8oRPYLUKbKfLPpwFnkmWWwavFPlYVRuJg',
	useCdn: false
});

export default client;
