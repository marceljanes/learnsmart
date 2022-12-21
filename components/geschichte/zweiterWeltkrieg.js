import FaktenBanner from "../karten/faktenBannerComponent"
import AngriffPolen from '../../public/neuzeit/angriffpolen.jpg'
import Hitler from '../../public/neuzeit/adolfhitler.png'
import Russland from '../../public/neuzeit/Russland.jpg'
import Normandie from '../../public/neuzeit/normandie2.png'
import PictureBanner from "../karten/pictureBannerComponent"

export default function ZweiterWeltkriegComponent() {
    const text = 'Der Überfall der Deutschen auf Polen im Zweiten Weltkrieg begann am 1. September 1939, als das Deutsche Reich ohne Vorwarnung die polnischen Grenzen überschritt. Die Deutschen nutzten Luftangriffe, Panzer und Infanterie, um schnell in Polen vorzudringen. Die polnische Armee war dem deutschen Militär unterlegen und konnte dem Angriff nur wenig Widerstand entgegensetzen. Innerhalb weniger Tage waren die Deutschen in Warschau und in anderen wichtigen Städten Polens eingetroffen. Der Überfall auf Polen markierte den Beginn des Zweiten Weltkriegs in Europa.'
    const text2 = 'Danach erklärten Großbritannien und Frankreich Deutschland den Krieg. Im Frühjahr 1940 besetzte Deutschland Dänemark, Norwegen, die Niederlande, Belgien und Frankreich. Im Sommer 1941 griff Deutschland die Sowjetunion an und im Dezember desselben Jahres trat Japan in den Krieg ein, indem es Pearl Harbor angriff. Die USA erklärten Japan den Krieg und traten somit auch in den Zweiten Weltkrieg ein. Der Krieg endete am 8. Mai 1945 mit der Kapitulation Deutschlands. | Foto: Bundesarchiv, CC-BY-SA-3.0-de | Benno Wundshammer.'
    const text3 = 'Während des Zweiten Weltkriegs war Russland einer der Hauptkriegsparteien, zusammen mit den Vereinigten Staaten, Großbritannien und Frankreich. Nachdem Deutschland im Juni 1941 den Angriff auf die Sowjetunion gestartet hatte, wurde Russland zu einem der wichtigsten Schauplätze des Krieges. Die Sowjetunion hatte enorme Verluste zu beklagen und war gezwungen, ihre Industrien in den Osten zu verlegen, um den deutschen Angriffen zu entgehen. Trotzdem gelang es den sowjetischen Truppen, die deutsche Armee zurückzudrängen und schließlich den Krieg zu gewinnen. Der Sieg der Sowjetunion war ein wichtiger Faktor für den Sieg der Alliierten im Zweiten Weltkrieg.'
    const text4 = 'Am D-Day, dem 6. Juni 1944, landeten alliierte Streitkräfte an der Küste Normandiens in Frankreich, um den deutschen Besatzern entgegenzutreten. Die Landungen an den Stränden Omaha, Gold, Juno und Sword waren ein wichtiger Meilenstein im Zweiten Weltkrieg und führten schließlich zur Befreiung Frankreichs und zum Sieg der Alliierten. Es gab bei den Landungen am D-Day jedoch auch erhebliche Verluste auf beiden Seiten. Die alliierten Streitkräfte verloren etwa 10.000 Männer, darunter etwa 2.500 Amerikaner, 1.000 Briten und 500 Kanadier. Die deutsche Armee hatte etwa 4.000 Verluste zu beklagen. Die Landungen am D-Day waren eine der blutigsten Schlachten des Zweiten Weltkriegs.'
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
            <h1 className="mt-0">Der Zweite Weltkrieg? Eine Einführung</h1>
            
                
            <p>Der Zweite Weltkrieg entstand aus einer Kombination von Faktoren, darunter politische, militärische und wirtschaftliche Entwicklungen in Europa und den Vereinigten Staaten. Einige der wichtigsten Faktoren, die zum Ausbruch des Krieges beigetragen haben, sind:</p>
            <ul className="pl-10">
                <li>Das Ende des Ersten Weltkriegs: Der Erste Weltkrieg endete mit der Unterzeichnung des Vertrags von Versailles, der Deutschland schwerwiegende Reparationszahlungen auferlegte und das Deutsche Reich schwächte. Dies führte zu wirtschaftlicher Instabilität und politischem Chaos in Deutschland, was die Bühne für die Machtergreifung der Nationalsozialisten und die Führung von Adolf Hitler bereitete.</li>
                <li>Die wirtschaftliche Depression: Die Weltwirtschaftskrise der 1930er Jahre führte zu hoher Arbeitslosigkeit und wirtschaftlicher Instabilität in vielen Ländern. Dies trug dazu bei, dass sich viele Menschen gegen die bestehenden Regierungen wandten und alternative politische Bewegungen unterstützten, darunter die Nationalsozialisten in Deutschland.</li>
                <li>Die politischen Bemühungen um den Frieden: In den 1930er Jahren bemühten sich viele Nationen um den Frieden und versuchten, Kriegen durch Diplomatie und Verhandlungen vorzubeugen. Diese Bemühungen scheiterten jedoch aufgrund von Missverständnissen, Vorurteilen und mangelndem Vertrauen zwischen den Nationen.</li>
                <li>Die militärischen Ambitionen von Nazi-Deutschland: Hitler und die Nationalsozialisten hatten große territoriale Ambitionen und strebten nach der Schaffung eines Dritten Reiches, das Europa beherrschen sollte. Sie begannen, ihre militärischen Kräfte aufzustocken und machten Gebietsansprüche geltend, die zu Konflikten mit anderen Nationen führten.</li>
                <li>Die mangelnde Einmischung anderer Nationen: Die anderen Nationen in Europa und den Vereinigten Staaten unternahmen wenig, um die Aggressionen Deutschlands zu verhindern oder zu verurteilen. Sie hofften, dass sich die Dinge von selbst lösen würden, und waren nicht bereit, einzugreifen und den Frieden zu schützen. Dies führte dazu, dass Hitler und die Nationalsozialisten immer mehr Macht gewannen und ihre Aggressionen fortsetzten, bis es schließlich zum Krieg kam.</li>
            </ul>




            <PictureBanner picture={AngriffPolen} text={text} left={true} />
            <PictureBanner picture={Hitler} text={text2} left={false}/>
            
            

            <h2>Die ersten Jahre des Krieges</h2>
            <p>In den ersten Jahren des Krieges setzte Deutschland seine Blitzkriegsstrategie fort und eroberte zahlreiche Länder in Europa, darunter Dänemark, Norwegen, die Niederlande, Belgien und Frankreich. Die deutschen Truppen drangen auch in die Sowjetunion ein und eroberten riesige Gebiete im Osten. Allerdings gelang es den Alliierten, die deutsche Invasion in England abzuwehren und den Krieg in Europa aufrechtzuerhalten. In den USA, die zunächst neutral blieben, begann man, die Alliierten zu unterstützen und Rüstungsgüter zu liefern.</p>
            <h2>Die Deutschen nahmen Frankreich ein</h2>
            <p>Die Eroberung Frankreichs durch Deutschland im Zweiten Weltkrieg war eines der wichtigsten Ereignisse des Krieges und hatte weitreichende Auswirkungen auf den Verlauf des Krieges.

            Der Angriff auf Frankreich begann im Mai 1940, als Deutschland eine Invasion in das Land durchführte. Durch den Einsatz der Blitzkriegsstrategie gelang es den Deutschen, schnell voranzukommen und wichtige Städte wie Rotterdam und Brüssel einzunehmen. Die französische Armee war den deutschen Angriffen nicht gewachsen und wurde schließlich von den Deutschen geschlagen. Am 22. Juni 1940 kapitulierte Frankreich und unterlag der deutschen Besatzung.

            </p><p>Die Eroberung Frankreichs hatte eine Reihe von Auswirkungen auf den Verlauf des Krieges. Zunächst einmal stärkte sie die Position Deutschlands im Krieg, da das Land nun über eine große Menge an Ressourcen und eine strategisch wichtige Position in Europa verfügte. Es ermöglichte Deutschland auch, seine Invasion in die Sowjetunion vorzubereiten, die im Juni 1941 stattfand.

            Für Frankreich hatte die Eroberung schwerwiegende Folgen. Das Land wurde unter deutsche Besatzung gesetzt und viele Menschen wurden deportiert oder getötet. Die französische Wirtschaft wurde schwer beschädigt und das Land musste sich in den folgenden Jahren von den Auswirkungen des Krieges erholen.

            Insgesamt war die Eroberung Frankreichs durch Deutschland im Zweiten Weltkrieg ein entscheidender Moment im Krieg und hatte weitreichende Auswirkungen auf den Verlauf des Krieges und die Zukunft Frankreichs.</p>
                        <h2>Operation Barbarossa: Deutschlands Invasion der Sowjetunion</h2>
                        <p>Operation Barbarossa war der Codename für die Invasion der Sowjetunion durch Deutschland im Zweiten Weltkrieg. Die Invasion begann am 22. Juni 1941 und markierte den Beginn des größten und tödlichsten Krieges in der Geschichte der Menschheit.

            Die Operation wurde von Adolf Hitler und den deutschen Streitkräften geplant und durchgeführt. Die Deutschen hofften, dass sie die Sowjetunion schnell erobern und den Krieg gewinnen könnten, indem sie die sowjetischen Streitkräfte schnell schlagen und die Industriekapazität der Sowjetunion plündern würden.

            Die Invasion begann mit einer massiven Luftangriffe auf sowjetische Städte und Industriezentren. Danach setzten sich die deutschen Truppen schnell in Bewegung und drangen tief in das sowjetische Territorium ein. Die Sowjets waren auf die Invasion nicht vorbereitet und litten unter schweren Verlusten.

            </p><p>Trotz anfänglicher Erfolge konnte Deutschland die Sowjetunion jedoch nicht schnell genug erobern und die sowjetischen Streitkräfte begannen sich zu erholen und zurückzuschlagen. Die deutsche Armee litt unter den rauen Winterbedingungen und der sowjetischen Guerilla-Taktik. Schließlich wurde die deutsche Offensive auf Stalingrad gestoppt und die Sowjets schlugen die deutsche Armee zurück. Die Operation Barbarossa war eine entscheidende Niederlage für Deutschland und markierte eine Wende im Krieg zugunsten der Alliierten.

            Insgesamt hatte die Operation Barbarossa weitreichende Auswirkungen auf den Verlauf des Zweiten Weltkriegs. Sie markierte den Beginn eines langen und verheerenden Krieges im Osten und führte schließlich zur Niederlage Deutschlands. Die Operation hat auch zu enormen Verlusten an menschlichem Leben und zu enormen Zerstörungen in der Sowjetunion geführt.</p>
            <PictureBanner picture={Russland} text={text3} left={true}/>
                        <h2>Das Ende des Krieges mit der Kapitulation Deutschlands</h2>
                        <p>Deutschland hat den Zweiten Weltkrieg am 8. Mai 1945 verloren. Der Krieg endete, als Deutschland kapitulierte und sich der militärischen Überlegenheit der Alliierten ergab. Die Kapitulation erfolgte in Reims, Frankreich, und wurde von General Alfred Jodl, dem Chef des Wehrmachtsführungsstabs, unterschrieben.

            Die Niederlage Deutschlands im Zweiten Weltkrieg hatte weitreichende Auswirkungen auf das Land und die gesamte Welt. Deutschland wurde in Besatzungszonen aufgeteilt und der Prozess der Wiederaufbau und der Wiedervereinigung begann. Der Krieg hatte auch tiefgreifende Veränderungen in der politischen Landschaft Europas und der Welt bewirkt und hatte zu enormen Verlusten an menschlichem Leben und zu enormen Zerstörungen geführt.</p>
                        <h2>Die Wende im Krieg: D-Day - Die Landung in der Normandie</h2>
                        <p>Der D-Day, auch bekannt als die Landung in der Normandie, war ein wichtiger Wendepunkt im Zweiten Weltkrieg. Die Landung fand am 6. Juni 1944 statt und war eine groß angelegte amphibische Invasion der Alliierten in der Normandie, Frankreich, die von den deutschen Truppen besetzt war. Die Operation wurde von den Alliierten geplant und führte zur Rückeroberung Frankreichs und zur Niederlage Deutschlands.

                        Die Landung in der Normandie war die größte amphibische Invasion in der Geschichte der Menschheit und umfasste mehr als 150.000 Soldaten, die von tausenden von Schiffen und Flugzeugen unterstützt wurden. Die Alliierten setzten sich aus Truppen aus den USA, Großbritannien und Kanada zusammen. Die Landung fand an fünf Stränden statt, die Omaha, Utah, Gold, Juno und Sword hießen.

                        Die deutschen Truppen waren auf den Landungen in der Normandie nicht auf die Invasion vorbereitet und waren zahlenmäßig unterlegen. Trotzdem putzten sie sich tapfer und es gab schwere Kämpfe an den Stränden und in den umliegenden Dörfern.
                        </p>
                        <PictureBanner picture={Normandie} text={text4} left={false}/>
                        <p> Die Alliierten mussten ihren Vormarsch durch die deutschen Linien mit schweren Verlusten erkämpfen.

                        Nach einigen Tagen hatten die Alliierten jedoch die Kontrolle über die Strände und begannen, sich nach innen zu bewegen. Sie schlugen die deutschen Truppen zurück und eroberten schließlich die Stadt Caen. Von da an machten sie sich auf den Weg nach Paris und in Richtung Deutschland.

                        Der D-Day war der Anfang vom Ende für Deutschland im Zweiten Weltkrieg. Die Landung in der Normandie war der Beginn des Endspiels im Krieg und führte zur Niederlage Deutschlands und zum Sieg der Alliierten.</p>
                        <h2>Wichtige Ereignisse im Zweiten Weltkrieg</h2>
                        
            <ul>
                <li>Deutscher Angriff auf Polen: Der Zweite Weltkrieg begann am 1. September 1939, als Deutschland Polen überfiel und den Krieg auslöste.</li>
                <li>Eroberung von Frankreich: Im Mai 1940 führte Deutschland eine erfolgreiche Invasion in Frankreich durch, was dazu führte, dass die französische Armee kapitulierte und Frankreich unter deutscher Besatzung stand.</li>
                <li>Operation Barbarossa: Im Juni 1941 führte Deutschland eine Invasion in die Sowjetunion durch, die als Operation Barbarossa bekannt wurde. Dies war ein schwerer Schlag für die Sowjets, aber sie konnten die deutsche Offensive schließlich aufhalten und schlugen Deutschland zurück.</li>
                <li>Schlacht um Stalingrad: Die Schlacht um Stalingrad im Jahr 1942 war eine entscheidende Niederlage für Deutschland, da die deutsche Armee von den Sowjets zurückgeschlagen wurde und viele Soldaten getötet oder gefangen genommen wurden.</li>
                <li>D-Day-Invasion: Im Juni 1944 führten die Alliierten eine erfolgreiche Invasion in Frankreich durch, die als D-Day bekannt wurde. Dies war ein wichtiger Wendepunkt im Krieg, da die Alliierten damit begannen, Deutschland aus Frankreich zu vertreiben.</li>
            </ul>            
            
            
            <FaktenBanner daten={fragen} />
        </div>
    )
}