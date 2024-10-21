$(document).ready(function() {
    const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://mastodon.bsd.cafe/@sohrab.rss`;

    $.getJSON(RSS_URL, function(data) {
        let output = '';
        data.items.forEach((item, index) => {
            const date = new Date(item.pubDate).toLocaleDateString('fa-IR');
            const content = item.content.replace(/<[^>]*>/g, '').trim(); // Remove HTML tags
            output += `<div class="mastodon-post">
                        <span class="date">${date}</span>
                        <p>${content}</p>
                       </div>`;
        });
        $('#mastodon-posts').html(output);
    });
});
