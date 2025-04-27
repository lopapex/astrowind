const GOOGLE_SHEET_API_URL =
  'https://script.google.com/macros/s/AKfycbymFzqi6SaNgFFWetbWimasKbWfm08iT5eWTydzf0WmRcx-auN4UFaTckTkKzMu_5IbkQ/exec?path';
const TEAM_SHEET = `team`;
const REFERENCES_SHEET = `references`;

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

export async function fetchReferencesData(lang = 'en') {
  try {
    const response = await fetch(`${GOOGLE_SHEET_API_URL}=${REFERENCES_SHEET}-${lang}`);
    const { data } = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Invalid API response format');
    }

    return data.map((member, index) => {
      const videoUrl = member.Video || '';
      const videoIdMatch = videoUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
      const videoId = videoIdMatch ? videoIdMatch[1] : '';

      return {
        id: `${index} - ${member.Name}`,
        name: member.Name || '',
        video: videoUrl,
        thumbnail: videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '',
        description: member.Description || '',
      };
    });
  } catch (error) {
    console.error('Error fetching team data:', error);
    return [];
  }
}
