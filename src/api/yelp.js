import axios from 'axios';

export default axios.create(
{
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: 
	{
		Authorization: 'Bearer UttgLsVrF9IPshWwU-xRiWbOzsdOup0pcezisldrwpEQkiwkkXNZtDOvahy73SLFxsvWaF0v00NrsyD6dbXBgoCP7DtsAEeEMaUiQeyFuVRIDaLqn4P_4smYv-6SXnYx'
	}
}
	);
