$('#mysidebar').height($(".nav").height());


$( document ).ready(function() {

    //this script says, if the height of the viewport is greater than 800px, then insert affix class, which makes the nav bar float in a fixed
    // position as your scroll. if you have a lot of nav items, this height may not work for you.
    var h = $(window).height();
    //console.log (h);
    if (h > 800) {
        $( "#mysidebar" ).attr("class", "nav affix");
    }
    // activate tooltips. although this is a bootstrap js function, it must be activated this way in your theme.
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });

    /**
     * AnchorJS
     */
    anchors.add('h2,h3,h4,h5');

});

// needed for nav tabs on pages. See Formatting > Nav tabs for more details.
// script from http://stackoverflow.com/questions/10523433/how-do-i-keep-the-current-tab-active-with-twitter-bootstrap-after-a-page-reload
$(function() {
    var json, tabsState;
    $('a[data-toggle="pill"], a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var href, json, parentId, tabsState;

        tabsState = localStorage.getItem("tabs-state");
        json = JSON.parse(tabsState || "{}");
        parentId = $(e.target).parents("ul.nav.nav-pills, ul.nav.nav-tabs").attr("id");
        href = $(e.target).attr('href');
        json[parentId] = href;

        return localStorage.setItem("tabs-state", JSON.stringify(json));
    });

    tabsState = localStorage.getItem("tabs-state");
    json = JSON.parse(tabsState || "{}");

    $.each(json, function(containerId, href) {
        return $("#" + containerId + " a[href=" + href + "]").tab('show');
    });

    $("ul.nav.nav-pills, ul.nav.nav-tabs").each(function() {
        var $this = $(this);
        if (!json[$this.attr("id")]) {
            return $this.find("a[data-toggle=tab]:first, a[data-toggle=pill]:first").tab("show");
        }
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Feel free to change the label to say what you want
    label = 'Copy';
    




    //
    // Copies text to the clipboard.
    //
    // @param text string The text to copy
    // @param span object The span tag that's the copy link
    //
    function copyToClipboard(text, span) {
        // Get rid of the label if it's present
        if (text.endsWith(label)) {
            text = text.substr(0, text.length - label.length).trim();
        }

        // Use the Clipboard API with promises to
        // copy text to the clipboard
        if (navigator.clipboard && navigator.clipboard.writeText) {

            navigator.clipboard.writeText(text).then(function () {
                // Change the Copy button to show a Copied label for a few seconds
                showNotification(span);

            }, function () {
                alert('[ERROR] Copying to the clipboard failed!');
            });
        }
    }








    // Change the copy button to Copied for a couple
    // of seconds
    //
    // @param object span The <span> tag object
    //
    function showNotification(span) {
        // Add the notification to the page by creating a new <span> tag and positioning it over the Copy link
        var el = document.createElement('span');
        el.innerText = 'Copied';
        el.style.transition = 'opacity .25s linear'; // Use a transition to facilitate a fade effect
        el.style.opacity = 0;                     // Initially the opacity is zero
        el.style.position = 'absolute';            // Position the Copied text over the Copy text
        el.style.top = '2px';                 // Position the Copied text over the Copy text
        el.style.left = 0;                     // Position the Copied text over the Copy text
        el.style.backgroundColor = 'white';
        el.style.display = 'inline-block';
        el.style.textAlign = 'center';
        el.style.border = 'none';
        el.style.lineHeight = '10px';
        el.style.paddingTop = '3px';
        el.style.paddingLeft = 0;
        span.appendChild(el);

        // Set the new <span> tag to cover the Copy text
        el.style.width = el.parentElement.offsetWidth - 2 + 'px';
        el.style.height = el.parentElement.offsetHeight - 4 + 'px';
        el.style.width = el.parentElement.offsetWidth;

        // Set the opacity to 1 - and because of the transition this will fade in over a quarter of a second
        el.style.opacity = 1;

        // Set the Opacity of the Copied text back to zero after two seconds
        setTimeout(function () {
            el.style.opacity = 0;

            // Remove the Copied text from the DOM after 0.6 seconds
            setTimeout(function () {
                el.parentNode.removeChild(el);
            }, 600)
        }, 2000);
    }








    //
    // Now add a small Copy <span> to the top right of each code sample <pre> tag
    //
    document.addEventListener('DOMContentLoaded', function () {
        // Get all of the <pre> tags on the page
        var elmPre = document.getElementsByTagName('pre');

        // Loop through all of the <pre> tags
        for (var i = 0; i < elmPre.length; ++i) {
            
            var elmCod = elmPre[i].getElementsByTagName('code');
            // Ensure that the <pre> tag has a class="code" attribute and if the data-copy="false" attribute is not present
            // then continue. If the data-copy="false" attribute is present however then skip this particular <pre> tag.
            for (var j = 0; j < elmCod.length; ++j) {
                if (elmCod[j].getAttribute('data-copy') !== 'false') {

                    // Create a <div> and wrap the <pre> with
                    // it
                    var div = document.createElement('div');

                    // Wrap the <pre> element with the <div>.
                    // The wrapElement function is defined
                    // further down.
                    wrapElement(elmCod[j], div);

                    div.className = 'codeblock' + i + j;
                    //div.style.backgroundColor = '#eee';
                    //div.style.backgroundImage = 'linear-gradient(-45deg, rgba(255, 255, 255, 0.5), transparent)';

                    // Create the <span> tag that's the Copy
                    // link. The style positions the button at
                    // the top right of the <pre> tag, gives it
                    // a background, a border and some padding.
                    var span = document.createElement('span');
                    span.innerText = label;
                    // span.style.backgroundColor = 'white'
                    // span.style.border = '1px dashed black';
                    // span.style.color = 'black';
                    span.style.display = 'inline-block';
                    span.style.position = 'absolute';
                    // span.style.top = '9px';
                    span.style.right = '10px';
                    span.style.cursor = 'pointer';
                    // span.style.padding = '2px 15px 2px 15px';
                    // span.style.fontWeight = 'bold';
                    // span.style.fontSize = '10pt';
                    // span.style.lineHeight = '15px';
                    // span.style.overflow = 'hidden';
                    //elmPre[i].appendChild(span);
                    elmCod[j].insertBefore(span,elmCod[j]);

                    // When the Copy button is clicked call the copyToClipboard function and pass it the contents of the <pre>
                    span.onclick = function (e) {
                        copyToClipboard(span.innerText.replace(label, '').trim(), span)
                    }
                }
            }
        }
    });








    //
    // Wrap an element with another
    //
    // @param el      object The element to wrap
    // @param wrapper object The element that becomes the wrapper
    //
    function wrapElement(el, wrapper) {
        el.replaceWith(wrapper);
        wrapper.appendChild(el);
    }
