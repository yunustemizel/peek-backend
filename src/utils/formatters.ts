/* eslint-disable no-underscore-dangle */
export const formatMedias = (edges: any) => edges.map((edge) => {
  const { node } = edge;

  return {
    __typename: node.__typename,
    id: node.id,
    shortcode: node.shortcode,
    thumbnail: node.thumbnail_src,
    displayUrl: node.display_url,
    isVideo: node.is_video,
    videoUrl: node.video_url,
    sidecarMedias: node.__typename === 'GraphSidecar' ? node.edge_sidecar_to_children.edges.map((sidecarEdge) => ({
      id: sidecarEdge.node.id,
      shortcode: sidecarEdge.node.shortcode,
      thumbnail: sidecarEdge.node.thumbnail_src,
      displayUrl: sidecarEdge.node.display_url,
      isVideo: sidecarEdge.node.is_video,
      videoUrl: sidecarEdge.node.video_url,
    })) : null,
  };
});

export const formatProfile = (user: any, edges:any) => ({
  instagramUserId: user.pk,
  username: user.username,
  fullName: user.full_name,
  mediaCount: user.media_count,
  biography: user.biography,
  smallProfilePicture: user.profile_pic_url || null,
  profilePicture: user.hd_profile_pic_url_info.url || null,
  followers: user.follower_count,
  following: user.following_count,
  isVerified: user.is_verified,
  isPrivate: user.is_private,
  medias: formatMedias(edges),
});

export const formatUser = (user: any) => ({
  instagramUserId: user.pk,
  username: user.username,
  fullName: user.full_name,
  mediaCount: user.media_count,
  biography: user.biography,
  smallProfilePicture: user.profile_pic_url || null,
  profilePicture: user.hd_profile_pic_url_info.url || null,
  followers: user.follower_count,
  following: user.following_count,
  isVerified: user.is_verified,
  isPrivate: user.is_private,
});

export const formatUserShortDetails = (user: any) => ({
  instagramUserId: user.pk,
  username: user.username,
  fullName: user.full_name,
  smallProfilePicture: user.profile_pic_url || null,
  profilePicture: user.hd_profile_pic_url_info.url || null,
  isVerified: user.is_verified,
  isPrivate: user.is_private,
});

export const formatSearchUsers = (users: any) => users.map(({ user, position }) => ({
  id: user.pk,
  username: user.username,
  fullName: user.full_name,
  profilePicUrl: user.profile_pic_url,
  isPrivate: user.is_private,
  isVerified: user.is_verified,
  hasHighlightReels: user.has_highlight_reels,
  latestReelMedia: user.latest_reel_media,
  position,
}));

export const formatStories = (items: any) => items.map((item) => ({
  mediaType: item.media_type,
  displayUrl: item.image_versions2.candidates[0].url,
  url: item.media_type === 2 ? item.video_versions[0].url : item.image_versions2.candidates[0].url,
}));

export const formatMediaByShortcode = (data: any) => ({
  instagramUserId: data.owner.id,
  username: data.owner.username,
  fullName: data.owner.full_name,
  displayUrl: data.display_url,
  videoUrl: data.video_url,
  isVideo: !!data.video_url,
});
