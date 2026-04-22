import React from 'react';
import Header from '../../components/common/Header';
import Card from '../../components/common/Card';
import './CheatSheet.css';

const CheatSheet = () => {
  const metaElements = [
    { label: 'Exam', value: '22 April 2026' },
    { label: 'Format', value: '12 MCQ + 8 text marks' },
    { label: 'Duration', value: '30 min · Open book' }
  ];

  return (
    <div className="cheat-page">
      <Header 
        title="7COM1074 Deep Learning — Cheat Sheet"
        subtitle="Units 7–10 &nbsp;·&nbsp; Dr. Shabnam N. Kadir &nbsp;·&nbsp; University of Hertfordshire"
        metaElements={metaElements}
        variant="cheat"
      />

      <div className="cheat-grid">
        
        {/* ====== UNIT 7 ====== */}
        <div className="cheat-col">
          <Card unitNum={7} title="Deep Learning Fundamentals" variant="cheat">
            <div className="sec-title">Core Definitions</div>
            <ul>
              <li><strong>Deep NN:</strong> ≥2 hidden layers; weights minimise loss</li>
              <li><strong>Mitchell (1997):</strong> Learning = improving performance P at task T with experience E</li>
              <li><strong>FNN:</strong> No feedback; data flows input→output only</li>
            </ul>

            <div className="sec-title">Universal Approximation Theorem</div>
            <ul>
              <li>Hornik/Cybenko 1989 — single hidden layer can approximate ANY continuous function</li>
              <li><strong>Does NOT guarantee</strong> training algorithm finds solution</li>
              <li>Fails due to: optimization failure OR overfitting</li>
              <li>Deeper = exponentially fewer neurons needed</li>
            </ul>

            <div className="sec-title">Quality of a NN</div>
            <ul>
              <li><strong>Expressibility</strong> — what functions can it express?</li>
              <li><strong>Efficiency</strong> — how many neurons needed?</li>
              <li><strong>Learnability</strong> — how fast can it learn?</li>
            </ul>

            <div className="sec-title">Activation Functions</div>
            <table className="mini-table">
              <tbody>
                <tr><th>Name</th><th>Key Fact</th></tr>
                <tr><td><strong>Sigmoid</strong></td><td>0–1; vanishing gradient</td></tr>
                <tr><td><strong>Tanh</strong></td><td>−1 to 1; zero-centred; still vanishes</td></tr>
                <tr><td><strong>ReLU</strong></td><td>max(0,x); gradient=1 for x&gt;0; preferred</td></tr>
                <tr><td><strong>Softmax</strong></td><td>→ probability dist. (sum=1); final layer</td></tr>
              </tbody>
            </table>
            <div className="formula">Softmax: yᵢ = eʰⁱ / Σⱼ eʰʲ</div>
            <ul><li><strong>Why non-linear?</strong> Without it, stacked layers = 1 linear layer</li></ul>

            <div className="sec-title">Backpropagation</div>
            <ul>
              <li>Finds minimum of loss using gradient descent</li>
              <li>Loss must be continuous &amp; differentiable</li>
            </ul>
            <div className="formula">
              zₖˡ = Σⱼ wₖⱼˡ·aⱼˡ⁻¹ + bₖˡ  →  aₖˡ = f(zₖˡ)<br/>
              w ← w − η · ∂E/∂w
            </div>
            <ul>
              <li>Steps: ① Forward pass ② Backprop output ③ Backprop hidden ④ Update weights</li>
            </ul>

            <div className="sec-title">Vanishing / Exploding Gradients</div>
            <ul>
              <li><strong>Vanishing:</strong> gradients→0; early layers don't learn; worse with sigmoid/tanh</li>
              <li><strong>Exploding:</strong> gradients grow; weights unstable</li>
              <li>Solutions: ReLU, batch norm, gradient clipping, careful init</li>
            </ul>

            <div className="sec-title">Regularization</div>
            <ul>
              <li><strong>Dropout:</strong> randomly zero neurons each iter; prevents co-adaptation; acts like ensemble</li>
              <li><strong>Early stopping:</strong> stop when val loss rises</li>
              <li><strong>Weight decay (L2):</strong> penalise large weights</li>
            </ul>
            <div className="formula">E_total = E_orig + γ·½·Σwᵢⱼ²   (γ→0 = no penalty)</div>
          </Card>
        </div>

        {/* ====== UNIT 8 ====== */}
        <div className="cheat-col">
          <Card unitNum={8} title="Convolutional Neural Networks" variant="cheat">
            <div className="sec-title">What is a CNN?</div>
            <ul>
              <li>Special multi-layer NN for visual pattern recognition</li>
              <li>Uses <strong>convolution</strong> instead of full matrix multiplication</li>
              <li>Inspired by the brain's visual cortex</li>
              <li>Input image: m×m×r (r = channels; RGB: r=3)</li>
            </ul>

            <div className="sec-title">Why Not Fully Connected for Images?</div>
            <ul>
              <li>FC layer needs <strong>N×m×m×r weights</strong> — impractical</li>
              <li>Solution: restrict each neuron to a small local patch</li>
            </ul>

            <div className="sec-title">Key Properties</div>
            <ul>
              <li><strong>Sparse connectivity:</strong> each neuron sees only local region</li>
              <li><strong>Weight sharing:</strong> same filter applied everywhere → translation invariance</li>
              <li><strong>Hierarchical features:</strong> edges → shapes → objects in deeper layers</li>
              <li>Deeper layers have <strong>larger receptive fields</strong></li>
            </ul>

            <div className="sec-title">CNN Architecture (Standard)</div>
            <ul>
              <li>Input → [Conv + Pool]×N → Fully Connected → Softmax</li>
              <li>Conv layers: feature extraction</li>
              <li>Pooling layers: downsampling</li>
              <li>FC layers: classification</li>
            </ul>

            <div className="sec-title">Convolution Filters</div>
            <ul>
              <li>Filters are 2D matrices (e.g. 3×3, 5×5)</li>
              <li><strong>Learned during training</strong> (not hand-designed)</li>
              <li>Operation: element-wise multiply + sum over patch</li>
              <li>Designer sets stride (how many pixels to shift)</li>
              <li>Example: vertical edge filter subtracts left-neighbour pixel</li>
            </ul>

            <div className="sec-title">Pooling</div>
            <table className="mini-table">
              <tbody>
                <tr><th>Type</th><th>Operation</th></tr>
                <tr><td><strong>Max</strong></td><td>Max value in region — most common</td></tr>
                <tr><td><strong>Average</strong></td><td>Mean of region</td></tr>
                <tr><td><strong>L2 norm</strong></td><td>L2 norm of region</td></tr>
              </tbody>
            </table>
            <ul><li>Provides <strong>translation invariance</strong></li></ul>

            <div className="sec-title">ImageNet &amp; ILSVRC</div>
            <ul>
              <li><strong>ImageNet:</strong> 15M images, ~22k categories, Amazon Mechanical Turk labels</li>
              <li><strong>ILSVRC:</strong> annual competition — huge driver of progress</li>
              <li>AlexNet (2012): first deep CNN winner → deep learning revolution</li>
              <li>ResNet (2015): 152 layers, <strong>3.57%</strong> error &lt; human (~5.1%)</li>
            </ul>

            <div className="sec-title">MNIST</div>
            <ul>
              <li>70,000 handwritten digit images (28×28 px, B&amp;W)</li>
              <li>60k train / 10k test — standard benchmark</li>
            </ul>

            <div className="sec-title">Limitations & Apps</div>
            <ul>
              <li>Adversarial examples: tiny perturbation → wrong classification</li>
              <li>Applications: Image, Speech recognition, NLP</li>
            </ul>
          </Card>
        </div>

        {/* ====== UNIT 9 ====== */}
        <div className="cheat-col">
          <Card unitNum={9} title="Optimization & Training" variant="cheat">
            <div className="sec-title">Gradient Descent</div>
            <div className="formula">
              w ← w − η · ∂E/∂w<br/>
              (η = learning rate)
            </div>
            <ul>
              <li>Moves weights in direction of steepest loss decrease</li>
              <li>Non-linear activations → <strong>non-convex</strong> loss surface</li>
              <li>Only guaranteed to reach <strong>local</strong> minimum (not global)</li>
            </ul>

            <div className="sec-title">Training Modes</div>
            <table className="mini-table">
              <tbody>
                <tr><th>Mode</th><th>Updates</th><th>Pros/Cons</th></tr>
                <tr><td><strong>Stochastic (online)</strong></td><td>After each example</td><td>Fast, noisy; can escape local minima</td></tr>
                <tr><td><strong>Mini-batch</strong></td><td>After batch (32–256)</td><td>Best balance; most practical</td></tr>
                <tr><td><strong>Batch (full)</strong></td><td>After whole dataset</td><td>Accurate; impractical for large data</td></tr>
              </tbody>
            </table>
            <ul>
              <li>SGD: no global convergence guarantee</li>
            </ul>

            <div className="sec-title">Weight Initialisation</div>
            <ul>
              <li>Must be <strong>small random values</strong> — never all zeros</li>
              <li>All-zero init → symmetry → all neurons learn same thing</li>
              <li>Biases: zero or small positive values OK</li>
            </ul>

            <div className="sec-title">Learning Rate</div>
            <ul>
              <li>Too large → diverges (overshoots minimum)</li>
              <li>Too small → very slow convergence</li>
            </ul>

            <div className="sec-title">Adaptive Learning Methods</div>
            <table className="mini-table">
              <tbody>
                <tr><th>Method</th><th>Key Idea</th></tr>
                <tr><td><strong>Momentum</strong></td><td>Accumulate past gradients; accelerate consistent direction</td></tr>
                <tr><td><strong>AdaGrad</strong></td><td>Per-param LR; large updates for rare features</td></tr>
                <tr><td><strong>RMSProp</strong></td><td>Moving avg of squared gradients; prevents LR decay</td></tr>
                <tr><td><strong>Adam</strong></td><td>Momentum + RMSProp; most widely used</td></tr>
              </tbody>
            </table>

            <div className="sec-title">Batch Normalisation</div>
            <div className="formula">
              x̂ = (x − μ_batch)/√(σ²+ε)<br/>
              y = γ·x̂ + β  (γ,β = learned)
            </div>
            <ul>
              <li>Normalizes layer inputs → mean≈0, var≈1</li>
              <li>Benefits: higher LR, less sensitivity to init, regularization, helps gradients</li>
            </ul>

            <div className="sec-title">L2 Weight Decay</div>
            <div className="formula">
              E = E_orig + γ·½·Σwᵢⱼ²<br/>
              Better: E = E_orig + γ·½·Σ wᵢⱼ²/(1+wᵢⱼ²)
            </div>
            <ul>
              <li>Large weights = unstable network</li>
            </ul>

            <div className="sec-title">Non-Convexity</div>
            <ul>
              <li>In practice: many local minima are "good enough"</li>
              <li>Main challenge: saddle points &amp; plateaus</li>
            </ul>
          </Card>
        </div>

        {/* ====== UNIT 10 ====== */}
        <div className="cheat-col">
          <Card unitNum={10} title="Explainable AI (XAI)" variant="cheat">
            <div className="sec-title">Why XAI?</div>
            <ul>
              <li>Deep networks are "black boxes"</li>
              <li>Driven by: ethical concerns, regulations, trust in healthcare AI</li>
              <li>Key paper: Dr. Epaminondas Kapetanios (lecturer)</li>
            </ul>

            <div className="sec-title">XAI Methods</div>
            <ul>
              <li><strong>Visual Heatmaps:</strong> highlight which pixels drove decision — Grad-CAM, Saliency, LRP</li>
              <li><strong>Class &amp; Prototype Abstraction:</strong> generalized representations</li>
              <li><strong>Conceptual Explainability:</strong> map human concepts to internal representations</li>
              <li><strong>Textual Explainability:</strong> natural language explanations</li>
            </ul>

            <div className="sec-title">Achievements in Medicine</div>
            <ul>
              <li><strong>Interventional Methods:</strong> identify &amp; correct biases</li>
              <li><strong>Reveal New Criteria:</strong> discover unknown biomarkers</li>
            </ul>

            <div className="sec-title">Challenges (Key for Exam)</div>
            <table className="mini-table">
              <tbody>
                <tr><th>Challenge</th><th>Meaning</th></tr>
                <tr><td><strong>Evaluation</strong></td><td>No standardised metrics</td></tr>
                <tr><td><strong>Truthfulness</strong></td><td>Does explanation reflect actual model decision?</td></tr>
                <tr><td><strong>Usefulness</strong></td><td>Does it help humans decide?</td></tr>
                <tr><td><strong>Interpretability</strong></td><td>Can humans understand it?</td></tr>
                <tr><td><strong>Workflow</strong></td><td>Hard to integrate into practice</td></tr>
                <tr><td><strong>Human-Centric</strong></td><td>Match how clinicians think</td></tr>
                <tr><td><strong>Context</strong></td><td>Patient data beyond images needed</td></tr>
              </tbody>
            </table>

            <div className="sec-title">Future Directions</div>
            <ul>
              <li>Standardized evaluation methods</li>
              <li>Clinical workflow integration</li>
              <li>Human-centric explanations</li>
              <li>AI researchers + medical professionals collaboration</li>
            </ul>

            <div className="sec-title">Adversarial Examples</div>
            <ul>
              <li>Goodfellow et al. (2015): panda + tiny noise → classified as "gibbon" at 99.3%</li>
              <li>Demonstrates why XAI is needed</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* QUICK REFERENCE ROW */}
      <div className="quick-ref">
        <div className="qr-card">
          <h3>⚡ Exam Key Facts</h3>
          <span className="flag flag-blue">Universal Approx Theorem: Hornik/Cybenko 1989</span>
          <span className="flag flag-blue">Dropout: Srivastava et al. 2014</span>
          <span className="flag flag-red">AlexNet: Krizhevsky et al. 2012 — ILSVRC winner</span>
          <span className="flag flag-red">ResNet 2015: 3.57% error, 152 layers</span>
          <span className="flag flag-red">Human error ILSVRC: ~5.1%</span>
          <span className="flag flag-red">MNIST: 70k images, 28×28, 60k train/10k test</span>
          <span className="flag flag-green">Adversarial: Goodfellow et al. ICLR 2015</span>
          <span className="flag flag-yellow">XAI lecture: Dr. Epaminondas Kapetanios</span>
          <span className="flag flag-blue">SGD: only local convergence guaranteed</span>
          <span className="flag flag-blue">Softmax outputs sum to 1 (probability dist.)</span>
        </div>

        <div className="qr-card">
          <h3>📐 Key Formulas</h3>
          <div className="formula-list">
            <div className="u7-color">— Unit 7 —</div>
            <div className="formula">Softmax: yᵢ = eʰⁱ/Σeʰʲ</div>
            <div className="formula">Weight update: w ← w − η·∂E/∂w</div>
            <div className="formula">Neuron input: zₖˡ = Σwₖⱼˡ·aⱼˡ⁻¹ + bₖˡ</div>
            <div className="u9-color" style={{ marginTop: '6px' }}>— Unit 9 —</div>
            <div className="formula">L2 reg: E = E_orig + γ·½·Σwᵢⱼ²</div>
            <div className="formula">Batch norm: x̂ = (x−μ)/√(σ²+ε); y=γx̂+β</div>
          </div>
        </div>

        <div className="qr-card">
          <h3>🔑 Common Mistakes to Avoid</h3>
          <ul>
            <li>Universal Approx Thm does NOT guarantee learning</li>
            <li>Dropout is a <em>training</em> strategy — testing scales neurons</li>
            <li>Batch norm has <em>learnable</em> parameters γ and β</li>
            <li>SGD has no global convergence guarantee</li>
            <li>Max pooling is NOT learnable — fixed operation</li>
            <li>Convolution filter values ARE learned during training</li>
            <li>Softmax used in output layer; ReLU in hidden</li>
            <li>Weight decay γ→0 means no regularization</li>
            <li>XAI truthfulness ≠ usefulness — separate challenges</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CheatSheet;
