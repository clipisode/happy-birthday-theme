export function getElements(answer) {
  return [
    {
      type: "video",
      name: "video.reply",
      videoKey: answer.reply.clip.id,
      source: "clip",
      startAt: 2,
      endAt: 2 + answer.reply.clip.duration,
      props: {
        x: 0,
        y: 0,
        width: 720,
        height: 1280,
      },
    }
  ];
}
