function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65jHL3XIKBz":
        Script1();
        break;
      case "5VzJTsA477U":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5Z0TdcIX5Ha');
const duration = 500;
const easing = 'ease-out';
const id = '6NtgrWnVXPz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
