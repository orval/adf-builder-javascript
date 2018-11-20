import { ApplicationCard } from './application-card';
import { BlockQuote } from './block-quote';
import { BulletList } from './bullet-list';
import { CodeBlock } from './code-block';
import { DecisionList } from './decision-list';
import { Heading } from './heading';
import { ContentNode, TopLevelNode, Typed } from './index';
import { MediaGroup } from './media-group';
import { OrderedList } from './ordered-list';
import { Panel, PanelType } from './panel';
import { Paragraph } from './paragraph';
import { Rule } from './rule';
import { TaskList } from './task-list';
export declare class TableHeader {
    private readonly backgroundColor;
    content: ContentNode<TopLevelNode>;
    constructor(backgroundColor?: string | undefined);
    paragraph(): Paragraph;
    bulletList(): BulletList;
    orderedList(): OrderedList;
    heading(level: number): Heading;
    panel(panelType: PanelType): Panel;
    blockQuote(): BlockQuote;
    rule(): Rule;
    mediaGroup(): MediaGroup;
    applicationCard(title: string, text?: string): ApplicationCard;
    decisionList(localId: string): DecisionList;
    taskList(localId: string): TaskList;
    codeBlock(language?: string): CodeBlock;
    toJSON(): Typed;
}
