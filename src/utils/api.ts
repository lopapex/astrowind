const GOOGLE_SHEET_API_URL =
  'https://script.google.com/macros/s/AKfycbymFzqi6SaNgFFWetbWimasKbWfm08iT5eWTydzf0WmRcx-auN4UFaTckTkKzMu_5IbkQ/exec?path';
const TEAM_SHEET = `team`;

export async function fetchTeamData(lang = 'en') {
  try {
    const response = await fetch(`${GOOGLE_SHEET_API_URL}=${TEAM_SHEET}-${lang}`);
    const { data } = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Invalid API response format');
    }

    return data.map((member, index) => ({
      id: `${index} - ${member.Nickname}`,
      nickname: member.Nickname || '',
      name: member.Name || '',
      roles: member.Roles ? member.Roles.split(', ') : [],
      skills: member.Skills ? member.Skills.split(', ') : [],
      image: member.Image || '',
    }));
  } catch (error) {
    console.error('Error fetching team data:', error);
    return [];
  }
}
