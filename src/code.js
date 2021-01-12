export const codeString1 = `import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Component = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};`;

export const codeString2 = `from django.shortcuts import HttpResponse, render
from .models import Bus

def buses(request):
    buses = Bus.objects.all()
    context = {"buses": buses}
    return render(request, "buses.html", context)`;

export const codeString3 = `<body>
<h1>Bus Schedule</h1>
{% for bus in buses %}
<h2><a href="/buses/{{ bus.number }}">{{ bus }}</a></h2>
    {% for location in bus.location_set.all %}
        {{ location.time }}: {{ location.lat }}/{{location.lon}} <br>
    {% endfor %}
{% endfor %}
</body>`;
