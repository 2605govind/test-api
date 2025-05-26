export const getPlayWithFriend = async (req, res) => {
    try {
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;

    // If local IP, show message
    if (ip === '::1' || ip.startsWith('127.') || ip.startsWith('::ffff:127')) {
      return res.send('You are on localhost. No geolocation available.');
    }

    // Fetch location from IP
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    const location = response.data;

    res.json({
      ip: ip,
      country: location.country,
      region: location.regionName,
      city: location.city,
      zip: location.zip,
      lat: location.lat,
      lon: location.lon,
      isp: location.isp,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error getting location');
  }
}

