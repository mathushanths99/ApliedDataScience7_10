import React from 'react';
import Header from '../../components/common/Header';
import Card from '../../components/common/Card';
import { ConceptGrid, ConceptCard } from '../../components/common/ConceptCard';
import { AccordionContainer, AccordionItem } from '../../components/common/Accordion';
import './StudyGuide.css';

const StudyGuide = () => {
  return (
    <div className="study-page">
      <Header 
        title="Deep Learning &ndash; Complete Study Guide<br>Units 7 &ndash; 10"
        subtitle="Covers: Neural Networks Fundamentals &middot; CNNs &middot; Optimization &middot; Regularization &middot; XAI &nbsp;|&nbsp; In-class test: 22 April 2026"
        badge="7COM1074 &middot; UNIVERSITY OF HERTFORDSHIRE"
        variant="study"
      />

      <nav className="study-nav">
        <a href="#unit7">Unit 7 &mdash; DL Fundamentals</a>
        <a href="#unit8">Unit 8 &mdash; CNNs</a>
        <a href="#unit9">Unit 9 &mdash; Optimization</a>
        <a href="#unit10">Unit 10 &mdash; XAI</a>
        <a href="#qa">Practice Q&amp;A</a>
      </nav>

      <main className="study-main">

        {/* ===================== UNIT 7 ===================== */}
        <section id="unit7">
          <Card 
            unitNum={7} 
            title="Deep Learning Fundamentals" 
            subtitle="Neural networks, activation functions, loss functions, backpropagation"
            variant="study"
          >
            <h3>What Is Deep Learning?</h3>
            <p>Deep Learning is a machine learning technique that uses <strong>deep neural networks</strong> &mdash; multi-layer networks with two or more hidden layers. The weights are adjusted to minimise a <strong>loss/cost/error function</strong>.</p>
            <p><em>Mitchell (1997) definition:</em> "A computer program is said to learn from experience E with respect to task T and performance measure P, if its performance at T, as measured by P, improves with experience E."</p>

            <ConceptGrid>
              <ConceptCard unitNum={7} title="Expressibility" content="What class of functions can the network express?" />
              <ConceptCard unitNum={7} title="Efficiency" content="How many neurons/parameters are needed to approximate a function?" />
              <ConceptCard unitNum={7} title="Learnability" content="How rapidly can good parameters be learned?" />
            </ConceptGrid>

            <h3>Universal Approximation Theorem</h3>
            <p><strong>Hornik & Cybenko (1989):</strong> A feedforward network with a single layer is sufficient to approximate, to arbitrary precision, any continuous function.</p>
            <ul>
              <li>This does <em>not</em> guarantee the training algorithm will find the correct parameters.</li>
              <li>Learning can fail due to: (1) optimization failure, (2) overfitting.</li>
              <li>Deeper networks require <strong>exponentially fewer neurons</strong> than shallow networks to express the same function.</li>
            </ul>

            <h3>Activation Functions</h3>
            <table className="study-table">
              <tbody>
                <tr><th>Function</th><th>Formula</th><th>Key Property</th><th>Issue</th></tr>
                <tr><td>Sigmoid σ</td><td>1/(1+e⁻ˣ)</td><td>Output 0&ndash;1, smooth</td><td>Vanishing gradient in deep nets</td></tr>
                <tr><td>Tanh</td><td>(eˣ−e⁻ˣ)/(eˣ+e⁻ˣ)</td><td>Output &minus;1 to 1, zero-centred</td><td>Still vanishes in deep nets</td></tr>
                <tr><td>ReLU</td><td>max(0, x)</td><td>Fast, doesn't saturate for x&gt;0</td><td>Dying ReLU (neurons stuck at 0)</td></tr>
                <tr><td>Softmax</td><td>eʰⁱ / Σeʰʲ</td><td>Converts to probability distribution</td><td>Used in final classification layer</td></tr>
              </tbody>
            </table>

            <h3>Softmax in Detail</h3>
            <div className="study-formula">Softmax: yᵢ = eʰⁱ / Σⱼ eʰʲ  &rarr;  Outputs sum to 1 (probability distribution)</div>
            <p>Used in the final layer of classifiers. Paired with cross-entropy loss.</p>

            <h3>Backpropagation</h3>
            <p>Backpropagation finds the minimum of the loss function in weight space using <strong>gradient descent</strong>. The loss function must be <strong>continuous and differentiable</strong>.</p>
            <div className="study-formula">
              zₖˡ = Σⱼ wₖⱼˡ &middot; aⱼˡ⁻¹ + bₖˡ   (weighted input to neuron k in layer l)<br/>
              aₖˡ = f(zₖˡ)                    (apply activation function f)<br/>
              Weight update: wₖⱼˡ &rarr; wₖⱼˡ &minus; η &middot; ∂E/∂wₖⱼˡ   (η = learning rate)
            </div>

            <h3>Regularization</h3>
            <ConceptGrid>
              <ConceptCard unitNum={7} title="Dropout" content="Randomly 'drop' a proportion of neurons during training. Forces network not to rely on any single node." />
              <ConceptCard unitNum={7} title="Early Stopping" content="Stop training when validation loss begins to increase to prevent overfitting." />
              <ConceptCard unitNum={7} title="Weight Decay (L2)" content="Add penalty term to loss function. Discourages large weights." />
            </ConceptGrid>
          </Card>
        </section>

        {/* ===================== UNIT 8 ===================== */}
        <section id="unit8">
          <Card 
            unitNum={8} 
            title="Convolutional Neural Networks (CNNs)" 
            subtitle="Architecture, convolution, pooling, ImageNet, applications"
            variant="study"
          >
            <h3>What Is a CNN?</h3>
            <p>CNNs are a special kind of multi-layer neural network designed to recognize visual patterns directly from pixel images with <strong>minimal preprocessing</strong>. They use convolution in place of general matrix multiplication in at least one layer.</p>

            <ConceptGrid>
              <ConceptCard unitNum={8} title="Sparse Connectivity" content="Each neuron only connects to a local patch of the input — drastically reduces parameters." />
              <ConceptCard unitNum={8} title="Parameter Sharing" content="Same filter weights applied across the entire image. Learns translation-invariant features." />
              <ConceptCard unitNum={8} title="Hierarchical Features" content="Early layers: edges/textures. Middle layers: shapes. Deep layers: concepts." />
            </ConceptGrid>

            <h3>Convolution Filters</h3>
            <ul>
              <li>Filters are 2D matrices (e.g., 3×3, 5×5).</li>
              <li>Filter values are <strong>learned during training</strong> (not hand-designed).</li>
              <li>The <strong>stride</strong> controls how many pixels to shift for each operation.</li>
            </ul>

            <h3>Pooling</h3>
            <table className="study-table">
              <tbody>
                <tr><th>Type</th><th>Operation</th><th>Use</th></tr>
                <tr><td>Max Pooling</td><td>Take the maximum value in each region</td><td>Most common, captures strongest feature activation</td></tr>
                <tr><td>Average Pooling</td><td>Average of values in each region</td><td>Smoother, used in some architectures</td></tr>
              </tbody>
            </table>
          </Card>
        </section>

        {/* ===================== UNIT 9 ===================== */}
        <section id="unit9">
          <Card 
            unitNum={9} 
            title="Optimization & Training Strategies" 
            subtitle="Gradient descent variants, adaptive learning, batch normalisation, weight initialisation"
            variant="study"
          >
            <h3>Gradient Descent</h3>
            <div className="study-formula">
              w &larr; w &minus; η &middot; ∂E/∂w<br/>
              (η = learning rate, ∂E/∂w = gradient of loss w.r.t. weight)
            </div>

            <ConceptGrid>
              <ConceptCard unitNum={9} title="Momentum" content="Accumulates past gradients to accelerate learning in consistent directions." />
              <ConceptCard unitNum={9} title="Adam" content="Combines momentum + RMSProp. Most widely used in practice." />
              <ConceptCard unitNum={9} title="Batch Normalisation" content="Normalizes the inputs of each layer so that they have mean ~0 and variance ~1 during training." />
            </ConceptGrid>

            <h3>Learning Rate</h3>
            <ul>
              <li>Too large &rarr; loss diverges (overshoots minimum).</li>
              <li>Too small &rarr; very slow convergence.</li>
            </ul>

            <h3>Non-Convexity of Deep Learning</h3>
            <ul>
              <li>Local minima are unavoidable.</li>
              <li>In practice, many local minima have similar loss values to the global minimum.</li>
              <li>The main practical concern is saddle points and plateaus, not local minima.</li>
            </ul>
          </Card>
        </section>

        {/* ===================== UNIT 10 ===================== */}
        <section id="unit10">
          <Card 
            unitNum={10} 
            title="Explainable AI (XAI)" 
            subtitle="Interpretability methods, achievements, challenges in medical AI"
            variant="study"
          >
            <h3>Common XAI Methods</h3>
            <ConceptGrid>
              <ConceptCard unitNum={10} title="Visual Relevance Heatmaps" content="Visualize which pixels contributed to the model's decision. Examples: Grad-CAM." />
              <ConceptCard unitNum={10} title="Class & Prototype Abstraction" content="Generate generalized representations of classes or neurons." />
              <ConceptCard unitNum={10} title="Conceptual Explainability" content="Map human-understandable concepts to the model's internal representations." />
              <ConceptCard unitNum={10} title="Textual Explainability" content="Generate natural language explanations of the model's decisions." />
            </ConceptGrid>

            <h3>Challenges for XAI</h3>
            <table className="study-table">
              <tbody>
                <tr><th>Challenge</th><th>Description</th></tr>
                <tr><td>Truthfulness</td><td>Ensuring explanations accurately reflect how the model actually made its decision.</td></tr>
                <tr><td>Usefulness</td><td>Do explanations actually help humans make better decisions?</td></tr>
                <tr><td>Clinical Workflow</td><td>Integrating XAI tools into clinical practice requires careful workflow and usability design.</td></tr>
              </tbody>
            </table>
          </Card>
        </section>

        {/* ===================== Q & A ===================== */}
        <section id="qa">
          <AccordionContainer title="Practice Questions & Answers (Units 7–10)">
            <p style={{ color: 'var(--muted)', fontSize: '13px', marginBottom: '20px' }}>
              Click any question to reveal the answer.
            </p>

            <AccordionItem 
              type="MCQ"
              question="Q1. According to the Universal Approximation Theorem, a feedforward neural network with a single hidden layer can approximate any continuous function. However, which of the following is NOT guaranteed by this theorem?"
              answer="<p><strong>A: That the training algorithm will find the correct function.</strong></p><p>The theorem guarantees the network has the <em>capacity</em> to represent any continuous function, but it does not guarantee that gradient descent will find those parameters. Learning can fail due to (1) optimization failure or (2) overfitting.</p>"
            />

            <AccordionItem 
              type="MCQ"
              question="Q2. What is the main purpose of the Softmax function in the output layer of a classifier?"
              answer="<p><strong>A: It converts raw output scores into a probability distribution that sums to 1.</strong></p>"
            />

            <AccordionItem 
              type="MCQ"
              question="Q3. Which activation function is most commonly preferred in hidden layers of deep networks to mitigate the vanishing gradient problem?"
              answer="<p><strong>A: ReLU (Rectified Linear Unit).</strong></p><p>ReLU = max(0, x). Unlike sigmoid/tanh, its gradient is 1 for positive inputs, reducing the vanishing gradient problem significantly.</p>"
            />

            <AccordionItem 
              type="TEXT"
              question="TEXT Q1. Explain the vanishing gradient problem and describe two strategies to address it. (3–4 sentences)"
              answer="<p>The vanishing gradient problem occurs when gradients become extremely small as they are backpropagated through many layers, causing weights in early layers to receive near-zero updates and therefore barely learn. This is particularly problematic with sigmoid and tanh activations, which 'saturate' (produce flat gradients) for large input values. One strategy is to use <strong>ReLU activation</strong>, which has a gradient of 1 for positive inputs and does not saturate. Another strategy is <strong>batch normalisation</strong>, which normalizes layer inputs to have mean ~0 and variance ~1, maintaining gradient magnitude throughout the network.</p>"
            />
          </AccordionContainer>
        </section>

      </main>

      <footer className="study-footer">
        7COM1074 Deep Learning &middot; University of Hertfordshire &middot; Exam: 22 April 2026 &middot; Units 7&ndash;10
      </footer>
    </div>
  );
};

export default StudyGuide;
