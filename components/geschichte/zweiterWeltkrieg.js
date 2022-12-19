import FaktenBanner from "../karten/faktenBannerComponent"

export default function ZweiterWeltkriegComponent() {
    const fragen =  [
        {question: 'Was war der 2. Weltkrieg?', answer: 'Der Zweite Weltkrieg war ein globaler Krieg, der von 1939 bis 1945 dauerte und involvierte die meisten der Weltmächte, einschließlich aller großen Mächte, organisiert in zwei Allianzen: den Alliierten und den Achsenmächten.'},
        {question: 'Wie begann der 2. Weltkrieg', answer: 'Der Krieg wurde durch den Angriff Deutschlands auf Polen im September 1939 ausgelöst und breitete sich schnell auf andere Länder aus. Die Achsenmächte, angeführt von Deutschland, Italien und Japan, kämpften gegen die Alliierten, angeführt von den Vereinigten Staaten, Großbritannien und Frankreich.'},
        {question: 'Wie viele Opfer gab es?', answer: 'Der Krieg forderte eine hohe Zahl an Opfern, insbesondere unter der Zivilbevölkerung. Es wird geschätzt, dass mehr als 60 Millionen Menschen direkt oder indirekt im Zweiten Weltkrieg ums Leben gekommen sind, was mehr als 3 Prozent der Weltbevölkerung entspricht.'},
        {question: 'Was war der Holocaust?', answer: 'Der Holocaust war eines der schlimmsten Verbrechen, die während des Zweiten Weltkrieges begangen wurden. Die Nationalsozialisten in Deutschland verfolgten, deportierten und ermordeten Millionen von Juden, sowie auch andere Minderheiten wie Roma, Homosexuelle und Behinderte.'},
        {question: 'Was bedeutet der D-Day?', answer: 'Der D-Day im Juni 1944 war eine wichtige Wende im Krieg. Die Alliierten landeten an der Küste Frankreichs und begannen, den deutschen Truppen zurückzudrängen. Die deutschen Truppen wurden schließlich im Mai 1945 von den Alliierten besiegt'},
        {question: 'Wie veränderten sich die Länder?', answer: 'Der Zweite Weltkrieg hatte auch Auswirkungen auf die politische Landschaft Europas. Einige Länder wurden untergetaucht oder umstrukturiert, während andere neue Regierungen und politische Systeme einführten.'},
        {question: 'Wie veränderte sich die Weltwirtschaft', answer: 'Der Krieg hatte auch Auswirkungen auf die Weltwirtschaft. Viele Länder sahen ihre Industrien zerstört und mussten sich nach dem Krieg wieder aufbauen. Der Krieg führte auch zur Gründung der Vereinten Nationen und zur Einrichtung des Internationalen Währungsfonds und der Weltbank.'},
        {question: 'Wie endete der Krieg?', answer: 'Der Atomangriff auf Hiroshima und Nagasaki im August 1945 markierte das Ende des Zweiten Weltkrieges. Die USA warfen zwei Atombomben auf die japanischen Städte, was zur Kapitulation Japans und damit zum Ende des Krieges führte'},
        

    ]
        return (
        <div>
            <h1>Wie kam es zum Zweiten Weltkrieg? Die Vogeschichte</h1>
            
                
            <p>Der Zweite Weltkrieg entstand aus einer Kombination von Faktoren, darunter politische, militärische und wirtschaftliche Entwicklungen in Europa und den Vereinigten Staaten. Einige der wichtigsten Faktoren, die zum Ausbruch des Krieges beigetragen haben, sind:</p>
            <ul className="pl-10">
                <li>Das Ende des Ersten Weltkriegs: Der Erste Weltkrieg endete mit der Unterzeichnung des Vertrags von Versailles, der Deutschland schwerwiegende Reparationszahlungen auferlegte und das Deutsche Reich schwächte. Dies führte zu wirtschaftlicher Instabilität und politischem Chaos in Deutschland, was die Bühne für die Machtergreifung der Nationalsozialisten und die Führung von Adolf Hitler bereitete.</li>
                <li>Die wirtschaftliche Depression: Die Weltwirtschaftskrise der 1930er Jahre führte zu hoher Arbeitslosigkeit und wirtschaftlicher Instabilität in vielen Ländern. Dies trug dazu bei, dass sich viele Menschen gegen die bestehenden Regierungen wandten und alternative politische Bewegungen unterstützten, darunter die Nationalsozialisten in Deutschland.</li>
                <li>Die politischen Bemühungen um den Frieden: In den 1930er Jahren bemühten sich viele Nationen um den Frieden und versuchten, Kriegen durch Diplomatie und Verhandlungen vorzubeugen. Diese Bemühungen scheiterten jedoch aufgrund von Missverständnissen, Vorurteilen und mangelndem Vertrauen zwischen den Nationen.</li>
                <li>Die militärischen Ambitionen von Nazi-Deutschland: Hitler und die Nationalsozialisten hatten große territoriale Ambitionen und strebten nach der Schaffung eines "Dritten Reiches", das Europa beherrschen sollte. Sie begannen, ihre militärischen Kräfte aufzustocken und machten Gebietsansprüche geltend, die zu Konflikten mit anderen Nationen führten.</li>
                <li>Die mangelnde Einmischung anderer Nationen: Die anderen Nationen in Europa und den Vereinigten Staaten unternahmen wenig, um die Aggressionen Deutschlands zu verhindern oder zu verurteilen. Sie hofften, dass sich die Dinge von selbst lösen würden, und waren nicht bereit, einzugreifen und den Frieden zu schützen. Dies führte dazu, dass Hitler und die Nationalsozialisten immer mehr Macht gewannen und ihre Aggressionen fortsetzten, bis es schließlich zum Krieg kam.</li>
            </ul>

            
            <FaktenBanner daten={fragen} />
             
        </div>
    )
}