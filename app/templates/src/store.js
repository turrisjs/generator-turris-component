import postal from 'postal';

const <%= _.camelCase(name) %>Channel = postal.channel('<%= _.camelCase(name) %>');

<%= _.camelCase(name) %>Channel.subscribe('action', ({data}) => {
    // your stuff here
});

export default <%= _.camelCase(name) %>Channel;
