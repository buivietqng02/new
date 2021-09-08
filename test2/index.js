import { format, formatDistance, formatRelative, subDays } from 'date-fns';
format(new Date(), "'today is a ' eeee");
console.log(
  formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
);

formatRelative(subDays(new Date(), 3), new Date());
var x = 1;
const inner1= function() {
    return function(o) {
        console.log(o);
    }
}
inner1()("dfsadgsdg");
