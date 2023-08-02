class Script {

  process_incoming_request({request}) {
    // console is a global helper to improve debug
    // console.log(request. Content);
  const url = request.content.data.event.url
  const urlArr = url.split('/')
  const projectName = urlArr[7]
    return {
      content: {
text: `*New alert from project* *${projectName}*`,
attachments: [

{

fields: [
{

title: "**Project**",

value: projectName

},
{

title: "**Title**",

value: request.content.data.event.title

},
{

title: "**Culprit**",

value: request.content.data.event.culprit

},
{

title: "**Message**",

value: request.content.data.event.message

},
{

title: "**Environment**",

value: request.content.data.event.request.env.ENV

},
{

title: "**URL**",

value: `${request.content.data.event.request.method} ${request.content.data.event.request.url}`

},
{

title: "**See on Sentry**",

value: request.content.data.event.web_url

}
],

color: "danger",

},

],
      }
    };
  }
}


